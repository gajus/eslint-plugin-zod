const create = (context) => {
  return {
    CallExpression (node) {
      if (node.callee.object?.name !== 'z') {
        return;
      }

      if (node.callee.property.name !== 'object') {
        return;
      }

      if (!node.parent.property) {
        context.report({
          fix: (fixer) => {
            return fixer.insertTextAfter(node, '.strict()');
          },
          message: 'Add a strict() call to the schema.',
          node,
        });
      } else if (
        // z.object().strict()
        node.parent?.property?.name !== 'strict' &&
        // z.object().merge().strict()
        node.parent?.parent?.parent?.property?.name !== 'strict'
      ) {
        // As far as I can think, in cases where the property name is not-strict,
        // e.g. passthrough, we should not add a strict() call.
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
