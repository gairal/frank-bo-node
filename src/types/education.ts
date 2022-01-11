import { Timestamp } from "@google-cloud/firestore";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

import { FireStoreReference } from ".";

export interface FirestoreEducation extends DatabaseDocument {
  dateIn: Timestamp;
  dateOut: Timestamp;
  diploma: string;
  image: FireStoreReference<"image">;
  extra?: string;
  name: string;
  place: string;
  shortDescription: string;
  website: string;
}

export interface Education
  extends Pick<
    FirestoreEducation,
    "diploma" | "extra" | "name" | "place" | "shortDescription" | "website"
  > {
  dateIn: Date;
  dateOut: Date;
  image: string;
}
