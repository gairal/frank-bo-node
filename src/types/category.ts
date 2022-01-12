// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

export interface FirestoreCategory extends DatabaseDocument {
  name: string;
  order: number;
}

export type Category = Pick<FirestoreCategory, "name">;
