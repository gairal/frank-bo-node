import {
  CollectionReference,
  QueryDocumentSnapshot,
} from "@google-cloud/firestore";

import { firestore } from "../lib/db";
import { FirestoreWork, Work } from "../types/work";

const collection = firestore.collection(
  "work"
) as CollectionReference<FirestoreWork>;

const normalize = (doc: QueryDocumentSnapshot<FirestoreWork>): Work => {
  const { dateIn, dateOut, ...rest } = doc.data();

  return {
    ...rest,
    dateIn: dateIn.toDate(),
    ...(dateOut && { dateOut: dateOut.toDate() }),
  };
};

export const getAll = () =>
  collection
    .orderBy("dateIn", "desc")
    .get()
    .then((snapshot) => snapshot.docs.map(normalize));
