import type { QueryDocumentSnapshot } from "@google-cloud/firestore";

import { firestore } from "../lib/db";
import type { FirestoreInterest, Interest } from "../types/interest";

const collection = firestore.collection("interest").withConverter<Interest>({
  fromFirestore: (snapshot: QueryDocumentSnapshot<FirestoreInterest>) => {
    const { order, ...rest } = snapshot.data();
    return rest;
  },
  toFirestore: () => ({}),
});

export const getAll = () =>
  collection
    .orderBy("order")
    .get()
    .then(({ docs }) => docs.map((doc) => doc.data()));
