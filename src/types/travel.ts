import { GeoPoint } from "@google-cloud/firestore";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatabaseDocument } from "firestore-jest-mock/mocks/firebase";

export interface FirestoreTravel extends DatabaseDocument {
  coordinates: GeoPoint;
  order: number;
  place: string;
}

export interface Travel extends Pick<FirestoreTravel, "order" | "place"> {
  coordinates: { latitude: number; longitude: number };
}
