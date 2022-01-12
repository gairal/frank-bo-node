import { mockGoogleCloudFirestore } from "firestore-jest-mock";

import { categoryFixture } from "./category";
import { educationFixture } from "./education";
// import { interestFixture } from "./interest";
import { travelFixture } from "./travel";
import { workFixture } from "./work";

export const mockDb = () =>
  mockGoogleCloudFirestore({
    database: {
      category: categoryFixture(),
      education: educationFixture(),
      // interest: interestFixture(),
      // skill: skillFixture(),
      travel: travelFixture(),
      work: workFixture(),
    },
  });
