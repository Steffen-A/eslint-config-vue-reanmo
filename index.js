import globals from "globals";
import eslint from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  {
    plugins: {
      "unused-imports": unusedImports,
      tailwindcss: tailwind,
    },
  },
  { ignores: ["dist"] },
  { files: ["src/**/*.{js,mjs,cjs,ts,vue}"] },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  },
  {
    rules: {
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          registeredComponentsOnly: false,
        },
      ],
      "vue/block-lang": [
        "error",
        {
          script: {
            lang: "ts",
          },
        },
      ],
      "vue/block-order": [
        "error",
        {
          order: ["template", "script", "style"],
        },
      ],
      "vue/component-api-style": ["error", ["script-setup", "composition"]],
      "vue/define-emits-declaration": ["error", "type-literal"],
      "vue/define-macros-order": [
        "error",
        {
          order: ["defineOptions", "defineProps", "defineEmits"],
          defineExposeLast: true,
        },
      ],
      "vue/define-props-declaration": ["error", "type-based"],
      "vue/no-root-v-if": ["error"],
      "vue/no-undef-components": [
        "error",
        {
          ignorePatterns: [],
        },
      ],
      "vue/padding-line-between-blocks": ["error", "always"],
      "vue/prefer-separate-static-class": ["error"],
      "vue/require-typed-ref": ["error"],
      "tailwindcss/classnames-order": ["error"],
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  { languageOptions: { globals: globals.browser } },
  eslintConfigPrettier,
];
