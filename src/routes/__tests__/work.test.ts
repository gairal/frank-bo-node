import * as request from "supertest";

import { mockDb } from "../../../test/fixtures";
import { app } from "../../app";

mockDb();

const subject = async () => request(app.callback()).get("/works");

describe("/works", () => {
  test("returns work content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(10);

    expect(body[0]).toMatchInlineSnapshot(`
      Object {
        "accomplishments": "...",
        "dateIn": "2018-01-01T23:35:18.667Z",
        "description": "Ekino is a digital marketing agency based in Paris. It is part of the Fullsix group.",
        "image": "ekino.png",
        "name": "Ekino",
        "place": "San Francisco",
        "title": "Tech lead / Solution Architect",
        "website": "https://www.ekino.com/",
      }
    `);
  });
});
