import { QueryDocumentSnapshot } from "@google-cloud/firestore";

import { firestore } from "../lib/db";
import { Category } from "../types/category";
import { FirestoreInterest, Interest } from "../types/interest";
import { getAll as getAllCategories } from "./category";

const collection = firestore.collection("interest").withConverter<Interest>({
  fromFirestore: (snapshot: QueryDocumentSnapshot<FirestoreInterest>) => {
    const { category, ...rest } = snapshot.data();
    return { ...rest, category: category.id };
  },
  toFirestore: () => ({}),
});

const getCategoryMap = () =>
  getAllCategories().then((categories) =>
    categories.reduce<Record<string, Omit<Category, "id">>>(
      (cats, { id, label, order }) => ({ ...cats, [id]: { label, order } }),
      {}
    )
  );

const getAllInterests = () => collection.orderBy("order").get();

export const getAll = async () => {
  const [categoryMap, interestSnapshot] = await Promise.all([
    getCategoryMap(),
    getAllInterests(),
  ]);

  return interestSnapshot.docs.map((doc) => {
    const data = doc.data();
    return { ...data, category: categoryMap[data.category] };
  });
};

export const getAllByCategory = async () => {
  const [categoryMap, interestSnapshot] = await Promise.all([
    getCategoryMap(),
    getAllInterests(),
  ]);

  const categoriesWithInterest = interestSnapshot.docs.reduce<
    Record<
      string,
      Omit<Category, "id"> & { interests?: Omit<Interest, "category">[] }
    >
  >((cats, doc) => {
    const { category, ...rest } = doc.data();

    const cat = cats[category] ?? categoryMap[category];
    if (!cat) {
      return cats;
    }

    return {
      ...cats,
      [category]: { ...cat, interests: (cat.interests ?? []).concat(rest) },
    };
  }, {});

  return Object.values(categoriesWithInterest);
};
