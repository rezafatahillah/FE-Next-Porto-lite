import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const FamilyUpdateSchema = object().shape({
  main:  number().optional(),
  name: string().required("Name is required"),
  status : string().required(""),
  // status: object({
  //   code: string().required("Code is required"),
  //   name: string().required("Name is required"),
  // }).required("Status is required"),
  birthDate: string().required(),
  education: string().required(),
  job: string().required(),
});

export interface IFamilyUpdateSchema extends InferType<typeof FamilyUpdateSchema> {}
