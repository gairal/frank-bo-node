import { FirestoreCategory } from "../../src/types/category";

export const categoryFixture = (): FirestoreCategory[] => [
  {
    id: "database",
    name: "Database",
    order: 5,
  },
  {
    id: "miscellaneous",
    name: "Miscellaneous",
    order: 11,
  },
  {
    id: "languages",
    name: "languages",
    order: 10,
  },
  {
    id: "project-management",
    name: "Project Management",
    order: 8,
  },
  {
    id: "modelling",
    name: "Modelling",
    order: 7,
  },
  {
    id: "ide",
    name: "IDE",
    order: 9,
  },
  {
    id: "sports",
    name: "Sports",
    order: 4,
  },
  {
    id: "source-control",
    name: "Source Control",
    order: 4,
  },
  {
    id: "operating-systems",
    name: "Operating Systems",
    order: 6,
  },
  {
    id: "back-end-development",
    name: "Back-end development",
    order: 2,
  },
  {
    id: "travel",
    name: "Travel",
    order: 3,
  },
  {
    id: "server-administration",
    name: "Server administration",
    order: 3,
  },
  {
    id: "front-end-development",
    name: "Front-end development",
    order: 1,
  },
];
