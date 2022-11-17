export default {
  invalid: [
    {
      code: 'z.union([z.literal(\'foo\'), z.literal(\'bar\')])',
      errors: [
        {
          message: 'Use z.enum().',
        },
      ],
    },
  ],
  valid: [
    {
      code: 'z.enum([\'foo\', \'bar\'])',
    },
  ],
};
