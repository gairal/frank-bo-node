import { defineConfig } from "vitest/config";

// biome-ignore lint/style/noDefaultExport: exception
export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "html", "json-summary", "json"],
      reportOnFailure: true,
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 60,
        statements: 80,
      },
      include: ["src/**"],
      exclude: ["src/**/*.d.ts", "src/types/*.ts"],
    },
    globals: true,
    include: ["src/**/*.test.ts"],
    setupFiles: ["./test/setup.ts"],
  },
});
