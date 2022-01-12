import { QueryDocumentSnapshot } from "@google-cloud/firestore";

import { firestore } from "../lib/db";
import { FirestoreInterest, Interest } from "../types/interest";

const collection = firestore.collection("skill").withConverter<Interest>({
  fromFirestore: (snapshot: QueryDocumentSnapshot<FirestoreInterest>) => {
    const { category, ...rest } = snapshot.data();
    return { ...rest, category: category.id };
  },
  toFirestore: () => ({}),
});

export const getAll = () =>
  collection.get().then(({ docs }) => docs.map((doc) => doc.data()));

export const getAllByCategory = () => [];
