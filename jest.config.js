module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["<rootDir>/built/", "<rootDir>/node_modules/"],
  coverageReporters: ["html", "text", "text-summary"],
  coverageThreshold: {
    global: { branches: 80, functions: 100, lines: 100, statements: 100 },
  },
  moduleFileExtensions: ["js", "ts", "json"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  testRegex: "/__tests__/.*\\.test\\.ts$",
  transform: { "\\.ts$": "ts-jest" },
};
