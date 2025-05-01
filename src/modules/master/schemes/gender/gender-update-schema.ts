import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const GenderUpdateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface IGenderUpdateSchema extends InferType<typeof GenderUpdateSchema> {}
