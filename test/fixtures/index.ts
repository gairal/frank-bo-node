import { mockGoogleCloudFirestore } from "firestore-jest-mock";

export const mockDb = () =>
  mockGoogleCloudFirestore({
    database: {
      education: [
        { id: "abc123", name: "Homer Simpson" },
        { id: "abc456", name: "Lisa Simpson" },
      ],
      posts: [{ id: "123abc", title: "Really cool title" }],
    },
  });
