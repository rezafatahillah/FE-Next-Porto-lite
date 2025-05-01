import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const FamilyCreateSchema = object().shape({
  main:  number().optional(),
  name: string().required("Name is required"),
  status : string().required(""),
  birthDate: string().required(),
  education: string().required(),
  job: string().required(),
});

export interface IFamilyCreateSchema extends InferType<typeof FamilyCreateSchema> {}
