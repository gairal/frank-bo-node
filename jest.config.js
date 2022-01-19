module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/app.ts",
  ],
  coverageReporters: ["html", "text", "text-summary"],
  moduleFileExtensions: ["js", "ts", "json"],
  setupFilesAfterEnv: ["<rootDir>/test/setupAfterEnv.ts"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  testRegex: "/__tests__/.*\\.test\\.ts$",
  transform: { "\\.ts$": "ts-jest" },
};
