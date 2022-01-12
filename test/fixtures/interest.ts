import { FirestoreInterest } from "../../src/types/interest";

export const interestFixture = (): (Omit<FirestoreInterest, "category"> & {
  category: string;
})[] => [
  {
    category: "travel",
    name: "United States",
    order: 8,
  },
  {
    category: "miscellaneous",
    description: "SF, Fantasy, Manga/Comics",
    name: "Reading",
    order: 15,
  },
  {
    category: "sports",
    name: "Trekking",
    order: 12,
  },
  {
    category: "travel",
    name: "Ecuador",
    order: 2,
  },
  {
    category: "sports",
    description: "advanced PADI diver",
    name: "Scuba Diving",
    order: 10,
  },
  {
    category: "travel",
    name: "Myanmar (Burma)",
    order: 4,
  },
  {
    category: "miscellaneous",
    name: "Photography",
    order: 18,
  },
  {
    category: "miscellaneous",
    name: "Cooking",
    order: 19,
  },
  {
    category: "travel",
    name: "Thailand",
    order: 3,
  },
  {
    category: "travel",
    name: "Brazil",
    order: 5,
  },
  {
    category: "travel",
    name: "6 months travel around Southeast Asia",
    order: 0,
  },
  {
    category: "sports",
    name: "Tennis",
    order: 14,
  },
  {
    category: "travel",
    name: "Spain",
    order: 6,
  },
  {
    category: "miscellaneous",
    name: "Animation",
    order: 17,
  },
  {
    category: "travel",
    name: "And many more...",
    order: 9,
  },
  {
    category: "miscellaneous",
    description: "Favorite directors: Stanley Kubrick's & Terry Gilliam's",
    name: "Cinema",
    order: 16,
  },
  {
    category: "sports",
    name: "Mountain & road bicycling",
    order: 11,
  },
  {
    category: "sports",
    name: "Roller skating",
    order: 13,
  },
  {
    category: "travel",
    name: "Iceland",
    order: 1,
  },
  {
    category: "travel",
    name: "China",
    order: 7,
  },
];
