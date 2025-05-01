import { InferType, object, string } from "yup";

// ----------------------------------------------------------------------

export const AuthRequestResetPasswordSchema = object().shape({
  email: string()
    .required("Email is required")
    .email("Email must be a valid email address"),
});

export interface IAuthRequestResetPasswordSchema
  extends InferType<typeof AuthRequestResetPasswordSchema> {}
