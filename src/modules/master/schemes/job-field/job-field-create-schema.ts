import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const JobFieldCreateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface IJobFieldCreateSchema extends InferType<typeof JobFieldCreateSchema> {}
