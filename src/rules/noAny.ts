const create = (context) => {
    return {
      CallExpression (node) {
        if (node.callee.object?.name !== 'z') {
          return;
        }
  
        if (node.callee.property?.name !== 'any') {
          return;
        }
  
        context.report({
          message: "z.any() bypasses type checking.",
          node,
        });
      },
    };
  };
  
export = {
    create,
    meta: {
        docs: {
        description: "z.any() bypasses type checking.",
        url: 'https://github.com/gajus/eslint-plugin-zod#eslint-plugin-zod-rules-no-any',
        },
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
