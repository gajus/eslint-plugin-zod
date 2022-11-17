const create = (context) => {
  return {
    CallExpression (node) {
      if (node.callee.object.name !== 'z') {
        return;
      }

      if (node.callee.property.name !== 'object') {
        return;
      }

      if (node.parent.property?.name !== 'strict') {
        context.report({
          message: 'Add a strict() call to the schema.',
          node,
        });
      }
    },
  };
};

export = {
  create,
  meta: {
    docs: {
      description: 'Requires that objects are initialized with .strict().',
      url: 'https://github.com/gajus/eslint-plugin-zod#eslint-plugin-zod-rules-require-strict',
    },
    fixable: 'code',
    schema: [
      {
        additionalProperties: false,
        properties: {},
        type: 'object',
      },
    ],
    type: 'problem',
  },
};
