import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const MaritalStatusCreateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface IMaritalStatusCreateSchema extends InferType<typeof MaritalStatusCreateSchema> {}
