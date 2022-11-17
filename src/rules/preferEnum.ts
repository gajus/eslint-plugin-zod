const create = (context) => {
  return {
    CallExpression (node) {
      if (node.callee.object?.name !== 'z') {
        return;
      }

      if (node.callee.property.name !== 'union') {
        return;
      }

      const members = node.arguments[0].elements;

      const allMembersAreLiterals = members.every((member) => {
        return member.type === 'CallExpression' && member.callee.object.name === 'z' && member.callee.property.name === 'literal';
      });

      if (!allMembersAreLiterals) {
        return;
      }

      context.report({
        message: 'Use z.enum().',
        node,
      });
    },
  };
};

export = {
  create,
  meta: {
    docs: {
      description: 'Prefers `z.enum` over a union of literals.',
      url: 'https://github.com/gajus/eslint-plugin-zod#eslint-plugin-zod-rules-prefer-enum',
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
