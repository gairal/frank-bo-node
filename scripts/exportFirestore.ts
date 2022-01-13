import { GeoPoint, Timestamp } from "@google-cloud/firestore";

import { firestore } from "../src/lib/db";
import { categoryFixture } from "../test/fixtures/category";
import { educationFixture } from "../test/fixtures/education";
import { interestFixture } from "../test/fixtures/interest";
import { skillFixture } from "../test/fixtures/skill";
import { travelFixture } from "../test/fixtures/travel";
import { workFixture } from "../test/fixtures/work";
import { FirestoreCategory } from "../src/types/category";
import { FirestoreSkillByCategory } from "../src/types/skill";

export const insertCategories = async () => {
  const cats = categoryFixture();

  await Promise.all(
    cats.map(({ label, order }) =>
      firestore
        .collection("category")
        .doc(label.toLowerCase().replace(" ", "-"))
        .set({ label, order })
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
export const insertSkills = async () => {
  const skillsFix = skillFixture();

  const categoryMap = categoryFixture().reduce<
    Record<string, FirestoreCategory>
  >((map, cat) => ({ ...map, [cat.id]: cat }), {});

  const skillsByCategory = skillsFix.reduce<
    Record<string, FirestoreSkillByCategory>
  >((acc, { category, ...rest }) => {
    if (!categoryMap[category]) {
      throw Error("missing category");
    }
    const cat = acc[category] ?? { ...categoryMap[category], skills: [] };
    cat.skills.push(rest);

    return { ...acc, [category]: cat };
  }, {});

  await Promise.all(
    Object.entries(skillsByCategory).map(([id, { label, order, skills }]) =>
      firestore.collection("skill").doc(id).set({ label, order, skills })
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

insertSkills()
  .then(() => {
    console.info("DONE");
  })
  .catch((err) => {
    console.error(err);
  });
