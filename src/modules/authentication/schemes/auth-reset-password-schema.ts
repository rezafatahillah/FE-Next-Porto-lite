import { boolean, InferType, object, ref, string } from "yup";

// ----------------------------------------------------------------------

export const AuthResetPasswordSchema = object().shape({
  code: string()
    .required("Code is required!")
    .min(6, "Code must be at least 6 characters!"),
  password: string().required("Password is required"),
  passwordConfirmation: string()
    .required("Password is required")
    .oneOf([ref("password")], "Passwords must match"),
});

export interface IAuthResetPasswordSchema
  extends InferType<typeof AuthResetPasswordSchema> {}

export interface IAuthResetPasswordSchemaWithSigned
  extends IAuthResetPasswordSchema {
  token: string;
  signed: string;
}
