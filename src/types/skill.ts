import { DocumentReference } from "@google-cloud/firestore";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

import { FirestoreCategory } from "./category";

export interface FirestoreSkill extends DatabaseDocument {
  category: DocumentReference<FirestoreCategory>;
  name: string;
}

export interface Skill extends Pick<FirestoreSkill, "name"> {
  category: string;
}
