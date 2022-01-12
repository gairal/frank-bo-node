import { mockDb } from "./fixtures";

/**
 * initial DB mock to avoid error on CI
 * "Unable to detect a Project Id in the current environment"
 */
mockDb();
