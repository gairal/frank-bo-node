import { mockGoogleCloudFirestore } from "firestore-vitest";

import { educationFixture } from "./fixtures/education";
import { interestFixture } from "./fixtures/interest";
import { skillFixture } from "./fixtures/skill";
import { travelFixture } from "./fixtures/travel";
import { workFixture } from "./fixtures/work";

mockGoogleCloudFirestore({
  database: {
    education: educationFixture(),
    interest: interestFixture(),
    skill: skillFixture(),
    travel: travelFixture(),
    work: workFixture(),
  },
});
