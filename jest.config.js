module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/app.ts",
  ],
  coverageReporters: ["html", "text", "text-summary"],
  coverageThreshold: {
    global: { branches: 50, functions: 90, lines: 90, statements: 90 },
  },
  moduleFileExtensions: ["js", "ts", "json"],
  setupFilesAfterEnv: ["<rootDir>/test/setupFilesAfterEnv.ts"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  testRegex: "/__tests__/.*\\.test\\.ts$",
  transform: { "\\.ts$": "ts-jest" },
};
