import { array, InferType, number, object } from "yup";

// ----------------------------------------------------------------------

export const AccountUpdateAccessSchema = object().shape({
  roleId: number().required("Role is required"),
  permissions: array()
    .of(number().required("Permission is required"))
    .required(),
});

export interface IAccountUpdateAccessSchema
  extends InferType<typeof AccountUpdateAccessSchema> {}
