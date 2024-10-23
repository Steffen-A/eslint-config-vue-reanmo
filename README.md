# eslint-config-vue-reanmo

> **Sharable ESLint config with TypeScript, Vue, Prettier, and Tailwind CSS for ESLint 9+**

This package provides a shareable ESLint configuration for projects using **Vue** and **TypeScript**, along with **Prettier** integration. It includes sensible defaults and strict linting rules to improve code quality and consistency.

## Features

- **ESLint 9+**: Compatible with the latest version of ESLint.
- **Vue Support**: Integrates `eslint-plugin-vue` with recommended and custom settings for Vue files.
- **TypeScript Support**: Configures `@typescript-eslint` for stricter type safety and better code style enforcement.
- **Tailwind CSS Support**: Uses `eslint-plugin-tailwindcss` exclusively to enforce the correct order of Tailwind CSS classes.
- **Prettier Integration**: Uses `eslint-config-prettier` to avoid conflicts between Prettier and ESLint formatting rules.
- **Unused Imports**: Automatically removes unused imports with `eslint-plugin-unused-imports`.

## Installation

First, install the package and its peer dependencies:

```bash
npm install @steffen-reanmo/eslint-config-vue eslint prettier typescript eslint-plugin-vue typescript-eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-tailwindcss eslint-plugin-unused-imports --save-dev
```
