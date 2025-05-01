import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const JobTypeCreateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface IJobTypeCreateSchema extends InferType<typeof JobTypeCreateSchema> {}
