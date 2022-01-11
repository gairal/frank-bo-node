import {
  CollectionReference,
  QueryDocumentSnapshot,
} from "@google-cloud/firestore";

import { firestore } from "../lib/db";
import { FirestoreTravel, Travel } from "../types/travel";

const collection = firestore.collection(
  "travel"
) as CollectionReference<FirestoreTravel>;

const normalize = (doc: QueryDocumentSnapshot<FirestoreTravel>): Travel => {
  const { coordinates, ...rest } = doc.data();

  return {
    ...rest,
    coordinates: {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    },
  };
};

export const getAll = () =>
  collection
    .orderBy("order")
    .get()
    .then((snapshot) => snapshot.docs.map(normalize));
