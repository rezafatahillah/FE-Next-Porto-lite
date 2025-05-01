import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const JobFieldUpdateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface IJobFieldUpdateSchema extends InferType<typeof JobFieldUpdateSchema> {}
