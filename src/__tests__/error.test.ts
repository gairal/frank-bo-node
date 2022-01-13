import * as request from "supertest";

import { app } from "../app";
import * as educationModel from "../model/education";

const subject = async (path: string) => request(app.callback()).get(path);

describe("error", () => {
  test("returns a 404 status when path does not exist", async () => {
    const { body, status } = await subject("/does not exist");
    expect(status).toBe(404);
    expect(body).toStrictEqual({});
  });

  test("returns a 500 status on error", async () => {
    jest
      .spyOn(educationModel, "getAll")
      .mockRejectedValueOnce(Error("NETWORK_ERROR"));

    const { body, status } = await subject("/educations");

    expect(status).toBe(500);
    expect(body).toMatchObject({ message: "NETWORK_ERROR" });
  });
});
