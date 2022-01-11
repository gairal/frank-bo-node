import { Timestamp } from "@google-cloud/firestore";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

export interface FirestoreWork extends DatabaseDocument {
  accomplishments: string;
  dateIn: Timestamp;
  dateOut?: Timestamp;
  description: string;
  image: string;
  name: string;
  order: number;
  place: string;
  title: string;
  website: string;
}

export interface Work
  extends Pick<
    FirestoreWork,
    | "accomplishments"
    | "description"
    | "image"
    | "name"
    | "order"
    | "place"
    | "title"
    | "website"
  > {
  dateIn: Date;
  dateOut?: Date;
}
