import { firestore } from "../../src/lib/db";
import { FirestoreCategory } from "../../src/types/category";
import { FirestoreInterest } from "../../src/types/interest";

const getRef = (category: string) =>
  firestore.doc(
    `/category/${category}`
  ) as FirebaseFirestore.DocumentReference<FirestoreCategory>;

export const interestFixture = (): FirestoreInterest[] => [
  {
    category: getRef("travel"),
    id: "tS6SjtyPrlDrTk3JBrLf",
    name: "6 months travel around Southeast Asia",
    order: 0,
  },
  {
    category: getRef("travel"),
    id: "jXHjbYvuwCKG9ournl2j",
    name: "Iceland",
    order: 1,
  },
  {
    category: getRef("travel"),
    id: "b74VqRfRaGlE9ImQWVHK",
    name: "Ecuador",
    order: 2,
  },
  {
    category: getRef("travel"),
    id: "dUPMrwr4KbnSKoRS869k",
    name: "Thailand",
    order: 3,
  },
  {
    category: getRef("travel"),
    id: "Pm4ART6Hu5eTmr5uJ3vk",
    name: "Myanmar (Burma)",
    order: 4,
  },
  {
    category: getRef("travel"),
    id: "QG5wRaZ46Lkt5p28bPny",
    name: "Brazil",
    order: 5,
  },
  {
    category: getRef("travel"),
    id: "maNcPlC5NzlL0BhD6Tdj",
    name: "Spain",
    order: 6,
  },
  {
    category: getRef("travel"),
    id: "csiHmaJCvn25aH5XJ3AW",
    name: "China",
    order: 7,
  },
  {
    category: getRef("travel"),
    id: "MMjxAtOU4BeI2yUCyoll",
    name: "United States",
    order: 8,
  },
  {
    category: getRef("travel"),
    id: "0cfhJT05tyrf4S8dTTXJ",
    name: "And many more...",
    order: 9,
  },
  {
    category: getRef("sports"),
    description: "advanced PADI diver",
    id: "lnD2HwkhT08DcJTvbiMv",
    name: "Scuba Diving",
    order: 10,
  },
  {
    category: getRef("sports"),
    id: "cRXmdOIQTqZNfVkRQk1m",
    name: "Mountain & road bicycling",
    order: 11,
  },
  {
    category: getRef("sports"),
    id: "vsZDfaE35O7isjGQ7x76",
    name: "Trekking",
    order: 12,
  },
  {
    category: getRef("sports"),
    id: "jXsjHlrZalAfuldgmI8f",
    name: "Roller skating",
    order: 13,
  },
  {
    category: getRef("sports"),
    id: "h9G8ONGgne2pnVHZ9VYW",
    name: "Tennis",
    order: 14,
  },
  {
    category: getRef("miscellaneous"),
    description: "SF, Fantasy, Manga/Comics",
    id: "EN3Iwx8iMPZ4OiCvj8VS",
    name: "Reading",
    order: 15,
  },
  {
    category: getRef("miscellaneous"),
    description: "Favorite directors: Stanley Kubrick's & Terry Gilliam's",
    id: "z05wgUzDpcFXHMaQ0AQn",
    name: "Cinema",
    order: 16,
  },
  {
    category: getRef("miscellaneous"),
    id: "AAJH72Dsq4cmQZHc1DZ1",
    name: "Animation",
    order: 17,
  },
  {
    category: getRef("miscellaneous"),
    id: "Whgx84hsatWn8oLXxigv",
    name: "Photography",
    order: 18,
  },
  {
    category: getRef("miscellaneous"),
    id: "jkRgK1pQHxy9yn2V2i6M",
    name: "Cooking",
    order: 19,
  },
];
