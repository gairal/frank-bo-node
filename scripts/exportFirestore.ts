import { GeoPoint, Timestamp } from "@google-cloud/firestore";

import { firestore } from "../src/lib/db";
import { categoryFixture } from "../test/fixtures/category";
import { educationFixture } from "../test/fixtures/education";
import { interestFixture } from "../test/fixtures/interest";
import { travelFixture } from "../test/fixtures/travel";
import { workFixture } from "../test/fixtures/work";

export const insertCategories = async () => {
  const cats = categoryFixture();

  await Promise.all(
    cats.map(({ name, order }) =>
      firestore
        .collection("category")
        .doc(name.toLowerCase().replace(" ", "-"))
        .set({ label: name, order })
    )
  );
};

export const insertEducations = async () => {
  const edus = educationFixture();

  await Promise.all(
    edus.map(({ dateIn, dateOut, id, image, ...rest }) =>
      firestore
        .collection("education")
        .doc(image)
        .set({
          ...rest,
          dateIn: new Timestamp(dateIn.seconds, dateIn.nanoseconds),
          dateOut: new Timestamp(dateOut.seconds, dateOut.nanoseconds),
          image: firestore.doc(`/image/${image}`),
        })
    )
  );
};

export const insertTravels = async () => {
  const travels = travelFixture();

  await Promise.all(
    travels.map(({ coordinates: { latitude, longitude }, order, place }) =>
      firestore
        .collection("travel")
        .doc(place.toLowerCase().replace(" ", "-"))
        .set({ coordinates: new GeoPoint(latitude, longitude), order, place })
    )
  );
};

export const insertInterests = async () => {
  const interests = interestFixture();

  await Promise.all(
    interests.map(({ category, id, ...rest }) =>
      firestore
        .collection("interest")
        .doc()
        .set({ ...rest, category: firestore.doc(`/category/${category}`) })
    )
  );
};

export const insertWorks = async () => {
  const works = workFixture();

  await Promise.all(
    works.map(({ dateIn, dateOut, id, image, ...rest }) =>
      firestore
        .collection("work")
        .doc()
        .set({
          ...rest,
          dateIn,
          ...(dateOut && { dateOut }),
          image: firestore.doc(`/image/${image}`),
        })
    )
  );
};

insertInterests()
  .then(() => {
    console.info("DONE");
  })
  .catch((err) => {
    console.error(err);
  });
