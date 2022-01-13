import { FirestoreCategory } from "./category";

export interface FirestoreSkillByCategory extends FirestoreCategory {
  skills: { label: string; description?: string; level?: number }[];
}

export type SkillByCategory = Pick<
  FirestoreSkillByCategory,
  "label" | "skills"
>;
