// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

import { FireStoreReference } from ".";

export interface FirestoreInterest extends DatabaseDocument {
  category: FireStoreReference<"category">;
  name: string;
  order: number;
}

export interface Interest extends Pick<FirestoreInterest, "name" | "order"> {
  category: string;
}
