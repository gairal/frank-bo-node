import { createLogger, transports } from "winston";

import { LOG_LEVEL } from "../env";

export const logger = createLogger({
  level: LOG_LEVEL,
  transports: [new transports.Console()],
});
