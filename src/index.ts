import preferEnum from './rules/preferEnum';
import requireStrict from './rules/requireStrict';

const rules = {
  'prefer-enum': preferEnum,
  'require-strict': requireStrict,
};

export = {
  rules,
  rulesConfig: {
    'prefer-enum': 0,
    'require-strict': 0,
  },
};
