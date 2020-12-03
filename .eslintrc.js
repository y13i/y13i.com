const { resolve } = require("path");

module.exports = {
  plugins: ["graphql"],
  rules: {
    "graphql/template-strings": [
      "error",
      {
        env: "relay",
        tagName: "graphql",
        schemaJsonFilepath: resolve(
          __dirname,
          "src/__generated__/gatsby-introspection.json"
        ),
      },
    ],
  },
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ["*.js"],
      extends: ["eslint:recommended", "plugin:prettier/recommended"],
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:react/recommended",
      ],
      plugins: ["@typescript-eslint", "react", "react-hooks"],
      parser: "@typescript-eslint/parser",
      rules: {
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "react/prop-types": 0,
      },
    },
  ],
};
