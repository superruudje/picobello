import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default [
  // Ignore generated output
  {
    ignores: ["dist/**", "storybook-static/**", "coverage/**", "node_modules/**"],
  },

  js.configs.recommended,

  // Vue recommended rules (flat config)
  ...vue.configs["flat/recommended"],

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // ✅ IMPORTANT: Tell ESLint how to parse Vue SFCs
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser, // parse <script lang="ts"> correctly
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
    },
  },

  // TS files (non-Vue)
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },

  // A couple of sane Vue rules for component libraries
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
    },
  },

  {
    files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
    rules: {
      "no-undef": "off",
    },
  },

  // Prettier should be last
  prettierConfig,
];
