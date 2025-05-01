import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const ReligionUpdateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface IReligionUpdateSchema extends InferType<typeof ReligionUpdateSchema> {}
