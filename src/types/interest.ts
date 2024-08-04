import type { DocumentData } from "@google-cloud/firestore";

export interface FirestoreInterest extends DocumentData {
  description?: string;
  label: string;
  order: number;
}

export type Interest = Pick<FirestoreInterest, "description" | "label">;
