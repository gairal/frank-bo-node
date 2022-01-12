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

export const getAll = async () => {
  const [categories, interestSnapshot] = await Promise.all([
    getAllCategories(),
    collection.get(),
  ]);

  const categoryMap = categories.reduce<Record<string, Omit<Category, "id">>>(
    (cats, { id, label, order }) => ({ ...cats, [id]: { label, order } }),
    {}
  );

  return interestSnapshot.docs.map((doc) => {
    const data = doc.data();
    return { ...data, category: categoryMap[data.category] };
  });
};

export const getAllByCategory = () => [];
