import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const DoctypeCreateSchema = object().shape({
  name: string().required("Name is required"),
  required : number().required(""),
  group : string().required(""),
  active : number().required(""),
  file_id : number().optional(),
});

export interface IDoctypeCreateSchema extends InferType<typeof DoctypeCreateSchema> {}
