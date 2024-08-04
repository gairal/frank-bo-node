import request from "supertest";

import { app } from "../../app";

const subject = async () => request(app.callback()).get("/interests");

/**
 * converters are not supported by firestore-jest-mock
 * this makes most tests wrong
 */

describe("/interests", () => {
  test("returns interest content", async () => {
    const { body, status } = await subject();

    expect(status).toBe(200);
    expect(body).toHaveLength(10);

    expect(body[0]).toMatchInlineSnapshot(`
      {
        "description": "China, Vietnam, Thaïland, Laos, Cambodia, Malaysia, Indonesia, India, Iceland, Ecuador, USA, Brazil, Spain, and more...",
        "label": "Travel",
        "order": 0,
      }
    `);
  });
});
