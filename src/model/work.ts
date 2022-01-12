import { QueryDocumentSnapshot } from "@google-cloud/firestore";

import { firestore } from "../lib/db";
import { FirestoreWork, Work } from "../types/work";

const collection = firestore.collection("work").withConverter<Work>({
  fromFirestore: (snapshot: QueryDocumentSnapshot<FirestoreWork>) => {
    const { dateIn, dateOut, order, ...rest } = snapshot.data();
    return {
      ...rest,
      dateIn: dateIn.toDate(),
      ...(dateOut && { dateOut: dateOut.toDate() }),
    };
  },
  toFirestore: () => ({}),
});

export const getAll = () =>
  collection
    .orderBy("dateIn", "desc")
    .get()
    .then(({ docs }) => docs.map((doc) => doc.data()));
