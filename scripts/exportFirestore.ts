import { firestore } from "../src/lib/db";
import { educationFixture } from "../test/fixtures/education";
import { imageFixture } from "../test/fixtures/image";

export const insertEducations = async () => {
  const edus = educationFixture();

  await Promise.all(
    edus.map((edu) =>
      firestore.collection("education").doc(edu.name.toLowerCase()).set(edu)
    )
  );
};

export const insertImages = async () => {
  const imgs = imageFixture();

  await Promise.all(
    imgs.map((img) =>
      firestore
        .collection("image")
        .doc(img.name.split(".")[0])
        .set({ file: img.name })
    )
  );
};

const run = async () => {
  await insertImages();
};

run()
  .then(() => {
    console.info("DONE");
  })
  .catch((err) => {
    console.error(err);
  });
