import { DocumentData, Timestamp } from "@google-cloud/firestore";

export interface FirestoreEducation extends DocumentData {
  dateIn: Timestamp;
  dateOut: Timestamp;
  diploma: string;
  extra?: string;
  image: string;
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
