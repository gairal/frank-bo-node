import { Timestamp } from "@google-cloud/firestore";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

export interface FirestoreEducation extends DatabaseDocument {
  dateIn: Timestamp;
  dateOut: Timestamp;
  diploma: string;
  image: string;
  extra?: string;
  name: string;
  place: string;
  shortDescription: string;
  website: string;
}

export interface Education
  extends Pick<
    FirestoreEducation,
    | "diploma"
    | "extra"
    | "image"
    | "name"
    | "place"
    | "shortDescription"
    | "website"
  > {
  dateIn: Date;
  dateOut: Date;
}
