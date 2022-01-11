// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

export interface FirestoreEducation extends DatabaseDocument {
  name: string;
  order: number;
}

export interface Education {
  name: string;
  order: number;
}
