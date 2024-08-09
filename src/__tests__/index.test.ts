import { vi } from "vitest";
import { app } from "../app";
import { PORT } from "../env";
import "../index";

const mockListen = vi.fn();

vi.mock("../app", () => ({ app: { listen: vi.fn() } }));

afterEach(() => {
  mockListen.mockClear();
});

test("server works", () => {
  expect(app.listen).toHaveBeenCalledTimes(1);
  expect(app.listen).toHaveBeenCalledWith(PORT, expect.any(Function));
});
