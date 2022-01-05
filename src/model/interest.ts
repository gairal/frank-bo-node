import { DataSource } from "./DataSource";

const interestModel = new DataSource("interest");

export const getAll = () => interestModel.getAll();
export const getAllByCategory = () => interestModel.getAll();
export const getByCategory = (category: string) =>
  interestModel.getById(category);
export const getById = (id: string) => interestModel.getById(id);
