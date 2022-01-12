import { FirestoreCategory } from "../../src/types/category";

export const categoryFixture = (): FirestoreCategory[] => [
  {
    id: "database",
    label: "Database",
    order: 5,
  },
  {
    id: "miscellaneous",
    label: "Miscellaneous",
    order: 11,
  },
  {
    id: "languages",
    label: "languages",
    order: 10,
  },
  {
    id: "project-management",
    label: "Project Management",
    order: 8,
  },
  {
    id: "modelling",
    label: "Modelling",
    order: 7,
  },
  {
    id: "ide",
    label: "IDE",
    order: 9,
  },
  {
    id: "sports",
    label: "Sports",
    order: 4,
  },
  {
    id: "source-control",
    label: "Source Control",
    order: 4,
  },
  {
    id: "operating-systems",
    label: "Operating Systems",
    order: 6,
  },
  {
    id: "back-end-development",
    label: "Back-end development",
    order: 2,
  },
  {
    id: "travel",
    label: "Travel",
    order: 3,
  },
  {
    id: "server-administration",
    label: "Server administration",
    order: 3,
  },
  {
    id: "front-end-development",
    label: "Front-end development",
    order: 1,
  },
];
