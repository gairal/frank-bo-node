import * as request from "supertest";
import { mockGet } from "firestore-jest-mock/mocks/firestore";

import { app } from "../app";

const subject = async (path: string) => request(app.callback()).get(path);

describe("error", () => {
  test("returns a 404 status when path does not exist", async () => {
    const { body, status } = await subject("/does not exist");
    expect(status).toBe(404);
    expect(body).toStrictEqual({});
  });

  test.skip("returns a 500 on error", async () => {
    mockGet.mockRejectedValueOnce("NETWORK_ERROR");

    const { body, status } = await subject("/educations");
    expect(mockGet).toHaveBeenCalledTimes(1);

    expect(status).toBe(200);
    expect(body).toHaveLength(3);
    expect(mockGet).toHaveBeenCalledTimes(1);
  });
});
