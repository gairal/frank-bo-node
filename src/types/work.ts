import { Timestamp } from "@google-cloud/firestore";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

export interface FirestoreWork extends DatabaseDocument {
  achievements: { description: string; highlights?: string[] }[];
  company: string;
  dateIn: Timestamp;
  dateOut?: Timestamp;
  description: string;
  image: string;
  place: string;
  title: string;
  website: string;
}

export interface Work
  extends Pick<
    FirestoreWork,
    | "achievements"
    | "company"
    | "description"
    | "image"
    | "place"
    | "title"
    | "website"
  > {
  dateIn: Date;
  dateOut?: Date;
}
