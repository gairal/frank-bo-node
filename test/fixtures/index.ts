import { mockGoogleCloudFirestore } from "firestore-jest-mock";

import { categoryFixture } from "./category";
import { educationFixture } from "./education";

export const mockDb = () =>
  mockGoogleCloudFirestore({
    database: { category: categoryFixture(), education: educationFixture() },
  });
