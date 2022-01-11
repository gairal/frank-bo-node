import { Education, FirestoreEducation } from "../types/education";
import { DataSource } from "./DataSource";

const educationModel = new DataSource<FirestoreEducation>("education");

const normalize = ({
  dateIn,
  dateOut,
  ...rest
}: FirestoreEducation): Education => ({
  ...rest,
  dateIn: dateIn.toDate(),
  dateOut: dateOut.toDate(),
  image: "",
});

export const getAll = () =>
  educationModel.getAll().then((eds) => eds.map(normalize));
export const getById = (id: string) =>
  educationModel.getById(id).then((edu) => (edu ? normalize(edu) : edu));
