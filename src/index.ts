import preferEnum from './rules/preferEnum';
import requireStrict from './rules/requireStrict';
import noAny from './rules/noAny';

const rules = {
  'prefer-enum': preferEnum,
  'require-strict': requireStrict,
  'no-any': noAny
};

export = {
  rules,
  rulesConfig: {
    'prefer-enum': 0,
    'require-strict': 0,
    'no-any': 0,
  },
};
