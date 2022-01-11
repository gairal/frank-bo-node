import { Timestamp } from "@google-cloud/firestore";

import { FirestoreEducation } from "../../src/types/education";

export const educationFixture = (): FirestoreEducation[] => [
  {
    dateIn: Timestamp.fromDate(new Date("September 1, 2005")),
    dateOut: Timestamp.fromDate(new Date("July 31, 2008")),
    diploma:
      "Master in engineering specialized in Information Technology - Option software engineering",
    extra:
      "Tutored mathematics to middle school students (14 yrs) with the association EAH (EFREI's humanitarian association).",
    id: "5652786310021120",
    image: {
      id: "efrei",
      kind: "image",
      path: ["image", "efrei"],
    },
    name: "Efrei",
    place: "Villejuif",
    shortDescription: "Engineering school of IT and management",
    website: "http://www.efrei.fr",
  },
  {
    dateIn: Timestamp.fromDate(new Date("September 1, 2003")),
    dateOut: Timestamp.fromDate(new Date("July 31, 2005")),
    diploma:
      "BTS (Two-year university degree in Information Technology and Management) - Option application developer",
    id: "5762637883244544",
    image: {
      id: "enc",
      kind: "image",
      path: ["image", "enc"],
    },
    name: "ENC",
    place: "Paris 17th",
    shortDescription: "National School of Business",
    website: "http://www.enc-bessieres.org",
  },
  {
    dateIn: Timestamp.fromDate(new Date("September 1, 2000")),
    dateOut: Timestamp.fromDate(new Date("July 31, 2001")),
    diploma:
      "Baccalauréat S (High-school degree specialized in Science) with distinction",
    id: "5664902681198592",
    image: {
      id: "spf",
      kind: "image",
      path: ["image", "spf"],
    },
    name: "Saint-Pierre Fourier",
    place: "Paris 12th",
    shortDescription: "High school",
    website: "http://www.spfparis12.fr",
  },
];
