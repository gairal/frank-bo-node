import request from "supertest";

import { test, vi } from "vitest";
import { app } from "../app";
// biome-ignore lint/style/noNamespaceImport: exception
import * as educationModel from "../model/education";

const subject = async (path: string) => request(app.callback()).get(path);

describe("error", () => {
  test("returns a 404 status when path does not exist", async () => {
    const { body, status } = await subject("/does not exist");
    expect(status).toBe(404);
    expect(body).toStrictEqual({});
  });

  test("returns a 500 status on error", async () => {
    vi.spyOn(educationModel, "getAll").mockRejectedValueOnce(
      new Error("NETWORK_ERROR"),
    );

    const { body, status } = await subject("/educations");

    expect(status).toBe(500);
    expect(body).toMatchObject({ message: "NETWORK_ERROR" });
  });
});
