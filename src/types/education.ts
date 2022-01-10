import { Timestamp } from "@google-cloud/firestore";

export interface FirestoreEducation {
  dateIn: Timestamp;
  dateOut: Timestamp;
  diploma: string;
  id: string;
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
