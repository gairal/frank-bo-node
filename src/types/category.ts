import type { DocumentData } from "@google-cloud/firestore";

export interface FirestoreCategory extends DocumentData {
  label: string;
  order: number;
}

export type Category = Pick<FirestoreCategory, "label">;
