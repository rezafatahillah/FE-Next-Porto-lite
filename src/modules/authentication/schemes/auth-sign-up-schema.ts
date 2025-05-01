import { boolean, InferType, object, string } from "yup";

// ----------------------------------------------------------------------

export const AuthSignUpSchema = object().shape({
  name: string().required("Name is required"),
  email: string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: string().required("Password is required"),
});

export interface IAuthSignUpSchema extends InferType<typeof AuthSignUpSchema> {}
