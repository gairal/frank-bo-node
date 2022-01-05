import { DataSource } from "./DataSource";

const workModel = new DataSource("work");

export const getAll = () => workModel.getAll();
export const getById = (id: string) => workModel.getById(id);
export const getSkillsFromId = (id: string) => workModel.getById(id);
