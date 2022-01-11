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
    id: "1",
    image: {
      id: "5725107787923456",
      kind: "image",
      path: ["image", "5725107787923456"],
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
    id: "2",
    image: {
      id: "5705241014042624",
      kind: "image",
      path: ["image", "5705241014042624"],
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
    id: "3",
    image: {
      id: "5687539843203072",
      kind: "image",
      path: ["image", "5687539843203072"],
    },
    name: "Saint-Pierre Fourier",
    place: "Paris 12th",
    shortDescription: "High school",
    website: "http://www.spfparis12.fr",
  },
];
