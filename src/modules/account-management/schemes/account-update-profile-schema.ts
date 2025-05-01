import { InferType, object, string, number } from "yup";

// ----------------------------------------------------------------------

export const AccountUpdateProfileSchema = object().shape({
  name: string().required("Name is required"),
  pictureId: number().notRequired(),
});

export interface IAccountUpdateProfileSchema
  extends InferType<typeof AccountUpdateProfileSchema> {}
