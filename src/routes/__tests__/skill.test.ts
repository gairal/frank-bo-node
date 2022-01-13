import * as request from "supertest";

import { app } from "../../app";

const subject = async (path = "") =>
  request(app.callback()).get(`/skills${path}`);

describe("/skills", () => {
  test("returns skill content", async () => {
    const { body, status } = await subject();
    expect(status).toBe(200);
    expect(body).toHaveLength(0);
  });
});

describe("/skills/categories", () => {
  test("returns skill content", async () => {
    const { body, status } = await subject("/categories");
    expect(status).toBe(200);
    expect(body).toHaveLength(0);
  });
});
