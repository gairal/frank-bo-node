import { config } from "dotenv";

type LogLevel = "debug" | "error" | "info";

config();

export const LOG_LEVEL: LogLevel =
  (process.env.LOG_LEVEL as LogLevel) || "error";
export const PORT = Number(process.env.PORT) || 8000;
