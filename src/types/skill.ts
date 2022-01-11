// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

import { FireStoreReference } from ".";

export interface FirestoreSkill extends DatabaseDocument {
  category: FireStoreReference<"category">;
  name: string;
}

export interface Skill extends Pick<FirestoreSkill, "name"> {
  category: string;
}
