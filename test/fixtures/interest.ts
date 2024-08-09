import type { DatabaseDocument } from "firestore-vitest/mocks/firestore";
import type { FirestoreInterest } from "../../src/types/interest";

export const interestFixture = (): (FirestoreInterest & DatabaseDocument)[] => [
  {
    description:
      "China, Vietnam, Thaïland, Laos, Cambodia, Malaysia, Indonesia, India, Iceland, Ecuador, USA, Brazil, Spain, and more...",
    id: "travel",
    label: "Travel",
    order: 0,
  },
  {
    description: "advanced PADI diver",
    id: "scuba",
    label: "Scuba Diving",
    order: 1,
  },
  {
    description: "Yosemite, lost coast, Zion, Yellow Stone, ...",
    id: "backpacking",
    label: "Backpacking",
    order: 3,
  },
  {
    description: "",
    id: "biking",
    label: "Mountain & road biking",
    order: 4,
  },
  {
    description: "SF, Fantasy, Manga/Comics",
    id: "reading",
    label: "Reading",
    order: 5,
  },
  {
    description: "",
    id: "roller-skating",
    label: "Roller skating",
    order: 5,
  },
  {
    description: "Favorite directors: Stanley Kubrick's & Terry Gilliam's",
    id: "cinema",
    label: "Cinema",
    order: 6,
  },
  {
    id: "animation",
    label: "Animation",
    order: 7,
  },
  {
    id: "photography",
    label: "Photography",
    order: 8,
  },
  {
    id: "cooking",
    label: "Cooking",
    order: 9,
  },
];
