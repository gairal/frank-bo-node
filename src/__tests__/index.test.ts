import { app } from "../app";
import { PORT } from "../env";

const mockListen = jest.fn();

app.listen = mockListen;

afterEach(() => {
  mockListen.mockClear();
});

test("server works", () => {
  // eslint-disable-next-line global-require
  require("..");
  expect(app.listen).toHaveBeenCalledTimes(1);
  expect(app.listen).toHaveBeenCalledWith(PORT, expect.any(Function));
});
