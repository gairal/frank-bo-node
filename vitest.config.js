import { defineConfig } from "vitest/config";

// biome-ignore lint/style/noDefaultExport: exception
export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "html", "json-summary", "json"],
      reportOnFailure: true,
      thresholds: {
        lines: 90,
        branches: 80,
        functions: 80,
        statements: 80,
      },
      include: ["src/**"],
      exclude: ["src/**/*.d.ts"],
    },
    globals: true,
    include: ["src/**/*.test.ts"],
    setupFiles: ["./test/setup.ts"],
  },
});
