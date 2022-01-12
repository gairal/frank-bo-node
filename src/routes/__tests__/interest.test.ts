import * as request from "supertest";

import { mockDb } from "../../../test/fixtures";
import { app } from "../../app";

mockDb();

const subject = async (path = "") =>
  request(app.callback()).get(`/interests${path}`);

describe("/interests", () => {
  test("returns interest content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(20);

    expect(body[0]).toMatchInlineSnapshot(`
      Object {
        "name": "6 months travel around Southeast Asia",
        "order": 0,
      }
    `);
  });
});

describe("/interests/categories", () => {
  test.skip("returns interest content", async () => {
    const { body, status } = await subject("/categories");
    expect(status).toBe(200);
    expect(body).toHaveLength(3);

    expect(body[0]).toMatchInlineSnapshot(`
      Object {
        "interests": Array [
          Object {
            "name": "6 months travel around Southeast Asia",
            "order": 0,
          },
          Object {
            "name": "Iceland",
            "order": 1,
          },
          Object {
            "name": "Ecuador",
            "order": 2,
          },
          Object {
            "name": "Thailand",
            "order": 3,
          },
          Object {
            "name": "Myanmar (Burma)",
            "order": 4,
          },
          Object {
            "name": "Brazil",
            "order": 5,
          },
          Object {
            "name": "Spain",
            "order": 6,
          },
          Object {
            "name": "China",
            "order": 7,
          },
          Object {
            "name": "United States",
            "order": 8,
          },
          Object {
            "name": "And many more...",
            "order": 9,
          },
        ],
        "label": "Travel",
        "order": 3,
      }
    `);
  });
});
