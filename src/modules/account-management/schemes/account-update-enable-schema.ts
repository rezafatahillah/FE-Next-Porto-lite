import { InferType, object } from "yup";

// ----------------------------------------------------------------------

export const AccountUpdateEnableSchema = object().shape({});

export interface IAccountUpdateEnableSchema
  extends InferType<typeof AccountUpdateEnableSchema> {}
