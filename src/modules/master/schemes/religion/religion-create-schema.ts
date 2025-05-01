import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const ReligionCreateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface IReligionCreateSchema extends InferType<typeof ReligionCreateSchema> {}
