import { InferType, object, string } from "yup";

// ----------------------------------------------------------------------

export const UserUpdateSchema = object().shape({
  name: string().required("Name is required"),
  email: string()
    .required("Email is required")
    .email("Email must be a valid email address"),
});

export interface IUserUpdateSchema extends InferType<typeof UserUpdateSchema> {}
