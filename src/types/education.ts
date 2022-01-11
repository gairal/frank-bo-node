import { Timestamp } from "@google-cloud/firestore";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

export interface FirestoreEducation extends DatabaseDocument {
  dateIn: Timestamp;
  dateOut: Timestamp;
  diploma: string;
  image: { id: string; kind: "image"; path: ["image", string] };
  extra?: string;
  name: string;
  place: string;
  shortDescription: string;
  website: string;
}

export interface Education {
  dateIn: Date;
  dateOut: Date;
  diploma: string;
  extra?: string;
  name: string;
  place: string;
  shortDescription: string;
  website: string;
}
