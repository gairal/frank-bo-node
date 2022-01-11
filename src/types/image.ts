// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

export interface FirestoreImage extends DatabaseDocument {
  name: string;
}

export type Image = Pick<FirestoreImage, "name">;
