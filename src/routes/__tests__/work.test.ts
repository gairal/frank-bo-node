import * as request from "supertest";

import { mockDb } from "../../../test/fixtures";
import { app } from "../../app";

mockDb();

const subject = async () => request(app.callback()).get("/works");

describe("work", () => {
  test("returns work content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(10);
  });
});
