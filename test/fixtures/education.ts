import { Timestamp } from "@google-cloud/firestore";

import type { FirestoreEducation } from "../../src/types/education";

export const educationFixture = (): FirestoreEducation[] => [
  {
    dateIn: Timestamp.fromDate(new Date("2005-09-01")),
    dateOut: Timestamp.fromDate(new Date("2008-07-31")),
    diploma:
      "Master in engineering specialized in Information Technology - Option software engineering",
    extra:
      "Tutored mathematics to middle school students (14 yrs) with the association EAH (EFREI's humanitarian association).",
    id: "5652786310021120",
    image: "efrei.png",
    name: "Efrei",
    place: "Villejuif",
    shortDescription: "Engineering school of IT and management",
    website: "http://www.efrei.fr",
  },
  {
    dateIn: Timestamp.fromDate(new Date("2003-09-01")),
    dateOut: Timestamp.fromDate(new Date("2005-07-31")),
    diploma:
      "BTS (Two-year university degree in Information Technology and Management) - Option application developer",
    id: "5762637883244544",
    image: "enc.jpg",
    name: "ENC",
    place: "Paris 17th",
    shortDescription: "National School of Business",
    website: "http://www.enc-bessieres.org",
  },
  {
    dateIn: Timestamp.fromDate(new Date("2000-09-01")),
    dateOut: Timestamp.fromDate(new Date("2001-07-31")),
    diploma:
      "Baccalauréat S (High-school degree specialized in Science) with distinction",
    id: "5664902681198592",
    image: "spf.png",
    name: "Saint-Pierre Fourier",
    place: "Paris 12th",
    shortDescription: "High school",
    website: "http://www.spfparis12.fr",
  },
];
