import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const ReferenceCreateSchema = object().shape({
  name: string().required("Name is required"),
  address: string().required(""),
  phone: string().required(""),
  position: string().required(),
  relation : string().required(""),
  picture_id : number().optional(),
});

export interface IReferenceCreateSchema extends InferType<typeof ReferenceCreateSchema> {}
