import { config } from "dotenv";

config();

export const LOG_LEVEL = process.env.LOG_LEVEL ?? "error";
export const PORT = process.env.PORT ?? 3000;
