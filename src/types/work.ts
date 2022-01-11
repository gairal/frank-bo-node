import { Timestamp } from "@google-cloud/firestore";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

import { FireStoreReference } from ".";

export interface FirestoreWork extends DatabaseDocument {
  accomplishments: string;
  dateIn: Timestamp;
  dateOut: Timestamp;
  description: string;
  image: FireStoreReference<"image">;
  name: string;
  order: number;
  place: string;
  title: string;
  website: string;
}

export interface Education
  extends Pick<
    FirestoreWork,
    | "accomplishments"
    | "description"
    | "name"
    | "order"
    | "place"
    | "title"
    | "website"
  > {
  dateIn: Date;
  dateOut: Date;
  image: string;
}
