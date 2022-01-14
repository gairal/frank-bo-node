import { FirestoreCategory } from "./category";

export interface FirestoreSkillByCategory extends FirestoreCategory {
  skills: { description?: string; label: string; level?: number }[];
}

export type SkillByCategory = Pick<
  FirestoreSkillByCategory,
  "label" | "skills"
>;
