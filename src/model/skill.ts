import { QueryDocumentSnapshot } from "@google-cloud/firestore";

import { firestore } from "../lib/db";
import { FirestoreSkill, Skill } from "../types/skill";

const collection = firestore.collection("skill").withConverter<Skill>({
  fromFirestore: (snapshot: QueryDocumentSnapshot<FirestoreSkill>) => {
    const { category, ...rest } = snapshot.data();
    return { ...rest, category: category.id };
  },
  toFirestore: () => ({}),
});

export const getAll = () =>
  collection.get().then(({ docs }) => docs.map((doc) => doc.data()));

export const getAllByCategory = () => [];
