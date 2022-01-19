import { QueryDocumentSnapshot } from "@google-cloud/firestore";

import { Education, FirestoreEducation } from "../types/education";
import { firestore } from "../lib/db";

const collection = firestore.collection("education").withConverter<Education>({
  fromFirestore: (snapshot: QueryDocumentSnapshot<FirestoreEducation>) => {
    const { dateIn, dateOut, ...rest } = snapshot.data();
    return { ...rest, dateIn: dateIn.toDate(), dateOut: dateOut.toDate() };
  },
  toFirestore: () => ({}),
});

export const getAll = () =>
  collection
    .orderBy("dateIn", "desc")
    .get()
    .then(({ docs }) => docs.map((doc) => doc.data()));
