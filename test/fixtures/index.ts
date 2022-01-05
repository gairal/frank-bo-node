import { mockGoogleCloudFirestore } from "firestore-jest-mock";

import { educationFixture } from "./education";

export const mockDb = () =>
  mockGoogleCloudFirestore({
    database: { education: educationFixture() },
  });
