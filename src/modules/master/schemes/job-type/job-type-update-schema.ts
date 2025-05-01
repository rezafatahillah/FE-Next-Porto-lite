import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const JobTypeUpdateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface IJobTypeUpdateSchema extends InferType<typeof JobTypeUpdateSchema> {}
