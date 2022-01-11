import {
  CollectionReference,
  QueryDocumentSnapshot,
} from "@google-cloud/firestore";

import { Education, FirestoreEducation } from "../types/education";
import { firestore } from "../lib/db";

const collection = firestore.collection(
  "education"
) as CollectionReference<FirestoreEducation>;

const normalize = (
  doc: QueryDocumentSnapshot<FirestoreEducation>
): Education => {
  const { dateIn, dateOut, ...rest } = doc.data();

  return {
    ...rest,
    dateIn: dateIn.toDate(),
    dateOut: dateOut.toDate(),
  };
};

export const getAll = () =>
  collection
    .orderBy("dateIn", "desc")
    .get()
    .then((snapshot) => snapshot.docs.map(normalize));
