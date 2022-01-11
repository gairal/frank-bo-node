import { FirestoreEducation } from "../../src/types/education";

export const educationFixture = (): FirestoreEducation[] => [
  {
    dateIn: {
      isEqual: () => true,
      nanoseconds: 884000000,
      seconds: 1125673872,
      toDate: () => new Date(),
      toMillis: () => 0,
      valueOf: () => "",
    },
    dateOut: {
      isEqual: () => true,
      nanoseconds: 978000000,
      seconds: 1214925112,
      toDate: () => new Date(),
      toMillis: () => 0,
      valueOf: () => "",
    },
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
    dateIn: {
      isEqual: () => true,
      nanoseconds: 884000000,
      seconds: 1062515472,
      toDate: () => new Date(),
      toMillis: () => 0,
      valueOf: () => "",
    },
    dateOut: {
      isEqual: () => true,
      nanoseconds: 978000000,
      seconds: 1120230712,
      toDate: () => new Date(),
      toMillis: () => 0,
      valueOf: () => "",
    },
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
    dateIn: {
      isEqual: () => true,
      nanoseconds: 884000000,
      seconds: 967907472,
      toDate: () => new Date(),
      toMillis: () => 0,
      valueOf: () => "",
    },
    dateOut: {
      isEqual: () => true,
      nanoseconds: 978000000,
      seconds: 994000312,
      toDate: () => new Date(),
      toMillis: () => 0,
      valueOf: () => "",
    },
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
