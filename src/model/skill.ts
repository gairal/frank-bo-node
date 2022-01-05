import { DataSource } from "./DataSource";

const skillModel = new DataSource("skill");

export const getAll = () => skillModel.getAll();
export const getAllByCategory = () => skillModel.getAll();
export const getByCategory = (category: string) => skillModel.getById(category);
export const getById = (id: string) => skillModel.getById(id);
