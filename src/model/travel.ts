import { DataSource } from "./DataSource";

const travelModel = new DataSource("travel");

export const getAll = () => travelModel.getAll();
export const getById = (id: string) => travelModel.getById(id);
