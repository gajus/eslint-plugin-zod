export default {
  invalid: [
    {
      code: 'z.object()',
      errors: [
        {
          message: 'Add a strict() call to the schema.',
        },
      ],
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
      code: 'z.object().strict()',
    },
  ],
};
