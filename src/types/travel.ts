// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

export interface FirestoreTravel extends DatabaseDocument {
  coordinates: { latitude: number; longitude: number };
  order: number;
  place: string;
}

export type Travel = Pick<FirestoreTravel, "coordinates" | "order" | "place">;
