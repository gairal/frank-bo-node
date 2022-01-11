import * as request from "supertest";

import { mockDb } from "../../../test/fixtures";
import { app } from "../../app";

mockDb();

const subject = async () => request(app.callback()).get("/travels");

describe("travel", () => {
  test("returns travel content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(59);
  });
});
