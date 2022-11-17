# eslint-plugin-zod

[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![NPM version](http://img.shields.io/npm/v/eslint-plugin-zod.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-zod)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

[Zod](https://github.com/colinhacks/zod) linting rules for ESLint.

{"gitdown": "contents"}

## Installation

1. Install [ESLint](https://www.github.com/eslint/eslint).
1. Install [`eslint-plugin-zod`](https://github.com/gajus/eslint-plugin-zod) plugin.

<!-- -->

```sh
npm install eslint --save-dev
npm install eslint-plugin-zod --save-dev
```

## Configuration

1. Add `plugins` section and specify `eslint-plugin-zod` as a plugin.
1. Enable rules.

<!-- -->

```json
{
  "plugins": [
    "zod"
  ],
  "rules": {
    "zod/require-strict": [
      2,
    ],
  }
}

```

## Rules

<!-- Rules are sorted alphabetically. -->

{"gitdown": "include", "file": "./rules/require-strict.md"}
