import type { QueryDocumentSnapshot } from "@google-cloud/firestore";

import { firestore } from "../lib/db";
import type { FirestoreTravel, Travel } from "../types/travel";

const collection = firestore.collection("travel").withConverter<Travel>({
  fromFirestore: (snapshot: QueryDocumentSnapshot<FirestoreTravel>) => {
    const { coordinates, order, ...rest } = snapshot.data();
    return {
      ...rest,
      coordinates: {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      },
    };
  },
  toFirestore: () => ({}),
});

export const getAll = () =>
  collection
    .orderBy("order")
    .get()
    .then(({ docs }) => docs.map((doc) => doc.data()));
