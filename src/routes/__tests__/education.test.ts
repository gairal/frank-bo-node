import * as request from "supertest";

import { mockDb } from "../../../test/fixtures";
import { app } from "../../app";

mockDb();

const subject = async () => request(app.callback()).get("/educations");

describe("/education", () => {
  test("returns education content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(3);

    expect(body[0]).toMatchInlineSnapshot(`
      Object {
        "dateIn": "2005-08-31T22:00:00.000Z",
        "dateOut": "2008-07-01T15:11:52.978Z",
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
