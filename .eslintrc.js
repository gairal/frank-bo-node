module.exports = {
  extends: "airbnb-typescript-prettier",
  overrides: [
    {
      files: ["**/__tests__/**/*.ts"],
      extends: ["plugin:jest/recommended"],
      rules: {
        "jest/consistent-test-it": ["error", { fn: "it" }],
        "jest/expect-expect": [
          "error",
          {
            assertFunctionNames: [
              "expect",
              "assert*",
              "screen.find*By*",
              "screen.get*By*",
            ],
          },
        ],
        "jest/no-alias-methods": "error",
        "jest/no-large-snapshots": "error",
        "jest/no-restricted-matchers": [
          "error",
          {
            toBeFalsy: "Best to use a more explicit matcher",
            toBeTruthy: "Best to use a more explicit matcher",
          },
        ],
        "jest/no-standalone-expect": [
          "error",
          { additionalTestBlockFunctions: ["it.each"] },
        ],
        "jest/prefer-called-with": "error",
        "jest/prefer-to-be": "error",
        "jest/prefer-to-have-length": "error",
        "jest/prefer-strict-equal": "error",
      },
    },
  ],
  plugins: ["no-only-tests", "typescript-sort-keys"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: [],
        trailingUnderscore: "forbid",
      },
      {
        selector: "enumMember",
        format: ["PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          ["internal", "parent", "sibling", "index"],
        ],
      },
    ],
    "import/prefer-default-export": 0,
    "no-only-tests/no-only-tests": 2,
  },
};
