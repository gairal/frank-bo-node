import * as request from "supertest";

import { mockDb } from "../../../test/fixtures";
import { app } from "../../app";

mockDb();

const subject = async () => request(app.callback()).get("/skills");

describe("skill", () => {
  test("returns skill content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(0);
  });
});
