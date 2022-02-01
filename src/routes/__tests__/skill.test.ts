import * as request from "supertest";

import { app } from "../../app";

const subject = async () => request(app.callback()).get("/skills");

describe("/skills", () => {
  test("returns skill content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(11);

    expect(body[0]).toMatchInlineSnapshot(`
      Object {
        "label": "Server administration",
        "order": 3,
        "skills": Array [
          Object {
            "label": "Apache httpd",
            "level": 70,
          },
          Object {
            "label": "Apache Tomcat",
            "level": 50,
          },
          Object {
            "label": "Shell Script",
            "level": 50,
          },
        ],
      }
    `);
  });
});
