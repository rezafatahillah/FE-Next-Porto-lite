import { InferType, object } from "yup";

// ----------------------------------------------------------------------

export const AccountUpdateDisableSchema = object().shape({});

export interface IAccountUpdateDisableSchema
  extends InferType<typeof AccountUpdateDisableSchema> {}
