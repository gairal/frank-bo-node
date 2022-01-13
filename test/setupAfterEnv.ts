import { mockGoogleCloudFirestore } from "firestore-jest-mock";

import { categoryFixture } from "./fixtures/category";
import { educationFixture } from "./fixtures/education";
import { interestFixture } from "./fixtures/interest";
import { travelFixture } from "./fixtures/travel";
import { workFixture } from "./fixtures/work";

mockGoogleCloudFirestore({
  database: {
    category: categoryFixture(),
    education: educationFixture(),
    interest: interestFixture(),
    // skill: skillFixture(),
    travel: travelFixture(),
    work: workFixture(),
  },
});
