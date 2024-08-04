import { DocumentData, GeoPoint } from "@google-cloud/firestore";

export interface FirestoreTravel extends DocumentData {
  coordinates: GeoPoint;
  order: number;
  place: string;
}

export interface Travel extends Pick<FirestoreTravel, "place"> {
  coordinates: { latitude: number; longitude: number };
}
