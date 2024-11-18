/**
 * Base ESLint config
 */

const sharedRules = require("./index.rules")

module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "jest": true,
    "jest/globals": true,
  },
  "plugins": [
    "jest",
    "no-floating-promise",
    "simple-import-sort",
    "@stylistic/ts",
  ],
  "extends": [
    "google",
  ],
  "rules": sharedRules,
  "overrides": [
    {
      "files": ["*.json", "*.jsonc"],
      "rules": {
        "comma-dangle": ["error", "never"],
      },
    },
  ],
}
