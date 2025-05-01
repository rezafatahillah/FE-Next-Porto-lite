import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const MaritalStatusUpdateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface IMaritalStatusUpdateSchema extends InferType<typeof MaritalStatusUpdateSchema> {}
