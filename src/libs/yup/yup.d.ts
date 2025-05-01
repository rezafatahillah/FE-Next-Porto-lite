import 'yup';

// ----------------------------------------------------------------------

declare module 'yup' {
  interface StringSchema<TType, TContext, TDefault, TFlags> {
    isUseRequired(message: string): this;

    containNumber(message: string): this;
  }

  interface NumberSchema<TType, TContext, TDefault, TFlags> {
    isUseRequired(message: string): this;
  }
}
