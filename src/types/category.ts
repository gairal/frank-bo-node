// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

export interface FirestoreCategory extends DatabaseDocument {
  label: string;
  order: number;
}

export type Category = Pick<FirestoreCategory, "label">;
