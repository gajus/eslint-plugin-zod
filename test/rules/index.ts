/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

import {
  RuleTester,
} from 'eslint';
import {
  camelCase,
} from 'lodash';
import plugin from '../../src';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 'latest',
  },
});

const reportingRules = [
  'prefer-enum',
  'require-strict',
  'no-any',
];

for (const ruleName of reportingRules) {
  const assertions = require('./assertions/' + camelCase(ruleName));

  ruleTester.run(ruleName, plugin.rules[ruleName], assertions.default);
}
