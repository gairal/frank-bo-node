import { QueryDocumentSnapshot } from "@google-cloud/firestore";

import { firestore } from "../lib/db";
import { FirestoreSkillByCategory, SkillByCategory } from "../types/skill";

const collection = firestore
  .collection("skill")
  .withConverter<SkillByCategory>({
    fromFirestore: (
      snapshot: QueryDocumentSnapshot<FirestoreSkillByCategory>
    ) => {
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
