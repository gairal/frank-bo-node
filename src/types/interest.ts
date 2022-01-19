// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

export interface FirestoreInterest extends DatabaseDocument {
  description?: string;
  label: string;
  order: number;
}

export type Interest = Pick<FirestoreInterest, "description" | "label">;
