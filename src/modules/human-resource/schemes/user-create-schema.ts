import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const UserCreateSchema = object().shape({
  name: string().required("Name is required"),
  email: string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  pictureId: number().optional(),
});

export interface IUserCreateSchema extends InferType<typeof UserCreateSchema> {}
