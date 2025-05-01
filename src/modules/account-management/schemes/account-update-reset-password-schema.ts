import { InferType, object } from "yup";

// ----------------------------------------------------------------------

export const AccountUpdateResetPasswordSchema = object().shape({});

export interface IAccountUpdateResetPasswordSchema
  extends InferType<typeof AccountUpdateResetPasswordSchema> {}
