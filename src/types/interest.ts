import { DocumentReference } from "@google-cloud/firestore";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

import { FirestoreCategory } from "./category";

export interface FirestoreInterest extends DatabaseDocument {
  category: DocumentReference<FirestoreCategory>;
  name: string;
  order: number;
}

export interface Interest extends Pick<FirestoreInterest, "name" | "order"> {
  category: string;
}
