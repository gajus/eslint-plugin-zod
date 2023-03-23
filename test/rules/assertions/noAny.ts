export default {
    invalid: [
      {
        code: 'z.any()',
        errors: [
          {
            message: 'z.any() bypasses type checking.',
          },
        ],
      },
    ],
    valid: [
      {
        code: 'z.unknown()',
      },
    ],
  };
  