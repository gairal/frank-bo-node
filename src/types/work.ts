import { DocumentData, Timestamp } from "@google-cloud/firestore";

export interface FirestoreWork extends DocumentData {
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
