import * as request from "supertest";

import { app } from "../../app";

const subject = () => request(app.callback()).get("/travels");

describe("/travels", () => {
  test("returns travel content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(59);

    expect(body[0]).toMatchInlineSnapshot(`
      {
        "coordinates": {
          "_latitude": 52.3702,
          "_longitude": 4.89517,
        },
        "order": 5,
        "place": "Amsterdam",
      }
    `);
  });
});
