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
      datastore.runQuery(datastore.createQuery(kind)).then(([entities]) => [
        kind,
        entities.map((entity) => ({
          id: entity[datastore.KEY].id,
          ...entity,
        })),
      ])
    )
  );

  // export
  allRes.forEach(([kind, entities]) => {
    writeFileSync(`${__dirname}/import/${kind}.json`, JSON.stringify(entities));
  });
};

run().catch((err) => {
  console.error(err);
});
