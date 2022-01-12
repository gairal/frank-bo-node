import { QueryDocumentSnapshot } from "@google-cloud/firestore";

import { firestore } from "../lib/db";
import { Category, FirestoreCategory } from "../types/category";

const collection = firestore.collection("category").withConverter<Category>({
  fromFirestore: (snapshot: QueryDocumentSnapshot<FirestoreCategory>) => ({
    ...snapshot.data(),
    id: snapshot.id,
  }),
  toFirestore: () => ({}),
});

export const getAll = () =>
  collection
    .orderBy("order")
    .get()
    .then(({ docs }) => docs.map((doc) => doc.data()));
