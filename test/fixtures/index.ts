import { mockGoogleCloudFirestore } from "firestore-jest-mock";

import { categoryFixture } from "./category";
import { educationFixture } from "./education";
import { imageFixture } from "./image";
import { interestFixture } from "./interest";
import { skillFixture } from "./skill";
import { travelFixture } from "./travel";
import { workFixture } from "./work";

export const mockDb = () =>
  mockGoogleCloudFirestore({
    database: {
      category: categoryFixture(),
      education: educationFixture(),
      image: imageFixture(),
      interest: interestFixture(),
      skill: skillFixture(),
      travel: travelFixture(),
      work: workFixture(),
    },
  });
