import * as request from "supertest";

import { app } from "../../app";

const subject = async (path = "") =>
  request(app.callback()).get(`/interests${path}`);

/**
 * converters are not supported by firestore-jest-mock
 * this makes most tests wrong
 */

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
  test("returns interest content", async () => {
    const { body, status } = await subject("/categories");
    expect(status).toBe(200);

    expect(body).toHaveLength(0);
  });
});
