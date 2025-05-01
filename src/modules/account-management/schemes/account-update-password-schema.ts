import { InferType, object, ref, string } from "yup";

// ----------------------------------------------------------------------

export const AccountUpdatePasswordSchema = object().shape({
  password: string()
    .required("New Password is required")
    .test(
      "no-match",
      "New password must be different than old password",
      (value, { parent }) => value !== parent.currentPassword
    ),
  passwordConfirmation: string().oneOf(
    [ref("password")],
    "Passwords must match"
  ),
});

export interface IAccountUpdatePasswordSchema
  extends InferType<typeof AccountUpdatePasswordSchema> {}
