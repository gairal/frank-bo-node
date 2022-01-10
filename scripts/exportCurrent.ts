import { writeFileSync } from "fs";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Datastore } from "@google-cloud/datastore";

const datastore = new Datastore();
const KINDS = [
  "category",
  "education",
  "image",
  "interest",
  "skill",
  "travel",
  "work",
];

const run = async () => {
  const allRes = await Promise.all(
    KINDS.map((kind) =>
      datastore
        .runQuery(datastore.createQuery(kind))
        .then(([res]) => [kind, res])
    )
  );

  allRes.forEach(([kind, res]) => {
    writeFileSync(`${__dirname}/export/${kind}.json`, JSON.stringify(res));
  });
};

run().catch((err) => {
  console.error(err);
});
