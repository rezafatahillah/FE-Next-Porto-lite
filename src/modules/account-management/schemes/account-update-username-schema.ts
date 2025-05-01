import { InferType, object, string } from 'yup';

// ----------------------------------------------------------------------

export const AccountUpdateUsernameSchema = object().shape({
  username: string().required('Email is required').email('Email must be a valid email address'),
});

export interface IAccountUpdateUsernameSchema
  extends InferType<typeof AccountUpdateUsernameSchema> {}
