import { app } from "./app";
import { PORT } from "./env";
import { logger } from "./lib/logger";

app.listen(PORT, () => {
  logger.info(`Server running at http://localhost:${PORT}`);
});
