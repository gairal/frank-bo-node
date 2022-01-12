import * as request from "supertest";

import { mockDb } from "../../../test/fixtures";
import { app } from "../../app";

mockDb();

const subject = async () => request(app.callback()).get("/travels");

describe("/travels", () => {
  test("returns travel content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(59);

    expect(body[0]).toMatchInlineSnapshot(`
      Object {
        "coordinates": Object {
          "latitude": 52.3702,
          "longitude": 4.89517,
        },
        "order": 5,
        "place": "Amsterdam",
      }
    `);
  });
});
