import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const DoctypeUpdateSchema = object().shape({
  name: string().required("Name is required"),
  required : number().required(""),
  group : string().required(""),
  active : number().required(""),
  file_id : number().optional(),
});

export interface IDoctypeUpdateSchema extends InferType<typeof DoctypeUpdateSchema> {}
