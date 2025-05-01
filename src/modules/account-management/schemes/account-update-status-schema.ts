import { InferType, object } from 'yup';

// ----------------------------------------------------------------------

export const AccountUpdateStatusSchema = object().shape({});

export interface IAccountUpdateStatusSchema extends InferType<typeof AccountUpdateStatusSchema> {}
