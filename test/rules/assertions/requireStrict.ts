export default {
  invalid: [
    {
      code: 'z.object()',
      errors: [
        {
          message: 'Add a strict() call to the schema.',
        },
      ],
      output: 'z.object().strict()',
    },
    {
      code: 'z.object().passthrough()',
      errors: [
        {
          message: 'Add a strict() call to the schema.',
        },
      ],
    },
  ],
  valid: [
    {
      code: 'foo()',
    },
    {
      // Not a Zod schema
      code: 'b.object()',
    },
    {
      code: 'z.object().strict()',
    },
    {
      code: 'z.object().merge().strict()',
    },
    {
      // Ignore .and() calls
      code: 'z.object().and()',
    },
  ],
};
