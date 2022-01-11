import { GeoPoint, Timestamp } from "@google-cloud/firestore";

import { firestore } from "../src/lib/db";
import { categoryFixture } from "../test/fixtures/category";
import { educationFixture } from "../test/fixtures/education";
import { imageFixture } from "../test/fixtures/image";
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
    edus.map(
      ({
        dateIn,
        dateOut,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        id,
        image,
        ...rest
      }) =>
        firestore
          .collection("education")
          .doc(image.id)
          .set({
            ...rest,
            dateIn: new Timestamp(dateIn.seconds, dateIn.nanoseconds),
            dateOut: new Timestamp(dateOut.seconds, dateOut.nanoseconds),
            image: firestore.doc(image.path.join("/")),
          })
    )
  );
};

export const insertImages = async () => {
  const imgs = imageFixture();

  await Promise.all(
    imgs.map(({ file }) =>
      firestore.collection("image").doc(file.split(".")[0]).set({ file })
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

export const insertWorks = async () => {
  const works = workFixture();

  await Promise.all(
    works.map(
      ({
        dateIn,
        dateOut,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        id,
        image,
        ...rest
      }) =>
        firestore
          .collection("work")
          .doc()
          .set({
            ...rest,
            dateIn: Timestamp.fromDate(new Date(dateIn)),
            ...(dateOut && { dateOut: Timestamp.fromDate(new Date(dateOut)) }),
            image: firestore.doc(image.path.join("/")),
          })
    )
  );
};

const run = async () => {
  await insertTravels();
};

run()
  .then(() => {
    console.info("DONE");
  })
  .catch((err) => {
    console.error(err);
  });
