import { DataSource } from "./DataSource";

const educationModel = new DataSource("education");

export const getAll = () => educationModel.getAll();
export const getById = (id: string) => educationModel.getById(id);
