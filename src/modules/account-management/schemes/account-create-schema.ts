import { array, InferType, number, object, ref, string } from "yup";

// ----------------------------------------------------------------------

export const AccountCreateSchema = object().shape({
  userId: string()
    .required("User is required")
    .nullable()
    .transform((currentValue) =>
      currentValue === null ? undefined : currentValue
    ),
  roleId: number()
    .required("Role is required")
    .nullable()
    .transform((currentValue) =>
      currentValue === null ? undefined : currentValue
    ),
  permissions: array()
    .of(number().required("Permission is required"))
    .notRequired(),
  password: string().notRequired(),
  passwordConfirmation: string().oneOf(
    [ref("password")],
    "Passwords must match"
  ),
});

export interface IAccountCreateSchema
  extends InferType<typeof AccountCreateSchema> {}
