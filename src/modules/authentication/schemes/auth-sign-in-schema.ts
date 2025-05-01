import { boolean, InferType, object, string } from 'yup';

// ----------------------------------------------------------------------

export const AuthSignInSchema = object().shape({
  username: string().required('Email is required').email('Email must be a valid email address'),
  password: string().required('Password is required'),
  rememberMe: boolean(),
});

export interface IAuthSignInSchema extends InferType<typeof AuthSignInSchema> {}
