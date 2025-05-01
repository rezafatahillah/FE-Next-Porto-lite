import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const ReferenceUpdateSchema = object().shape({
  name: string().required("Name is required"),
  address: string().required(""),
  phone: string().required(""),
  position: string().required(),
  relation : string().required(""),
  picture_id : number().optional(),
});

export interface IReferenceUpdateSchema extends InferType<typeof ReferenceUpdateSchema> {}
