import * as request from "supertest";

import { app } from "../../app";

const subject = () => request(app.callback()).get("/educations");

describe("/education", () => {
  test("returns education content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(3);

    expect(body[0]).toMatchInlineSnapshot(`
      Object {
        "dateIn": Object {
          "_nanoseconds": 0,
          "_seconds": 1125532800,
        },
        "dateOut": Object {
          "_nanoseconds": 0,
          "_seconds": 1217462400,
        },
        "diploma": "Master in engineering specialized in Information Technology - Option software engineering",
        "extra": "Tutored mathematics to middle school students (14 yrs) with the association EAH (EFREI's humanitarian association).",
        "image": "efrei.png",
        "name": "Efrei",
        "place": "Villejuif",
        "shortDescription": "Engineering school of IT and management",
        "website": "http://www.efrei.fr",
      }
    `);
  });
});
