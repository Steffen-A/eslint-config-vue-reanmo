# eslint-config-vue-reanmo

> **Sharable ESLint config with TypeScript, Vue, and Prettier for ESLint 9+**

This package provides a sharable ESLint configuration for projects using **Vue** and **TypeScript**, along with **Prettier** integration. It includes sensible defaults and strict linting rules for better code quality and consistency.

## Features

- **ESLint 9+**: Compatible with the latest version of ESLint.
- **Vue Support**: Integrates `eslint-plugin-vue` with recommended settings for Vue files.
- **TypeScript Support**: Configures `@typescript-eslint` for stricter type safety and better code style enforcement.
- **Unused Imports**: Automatically removes unused imports with `eslint-plugin-unused-imports`.
- **Prettier Integration**: Uses `eslint-config-prettier` to avoid conflicts between Prettier and ESLint formatting rules.
- **Custom Rules**: Provides additional custom rules, like enforcing PascalCase for Vue components and stricter handling of unused variables.

## Installation

First, install the package and its peer dependencies:

```bash
npm install eslint-config-vue-reanmo