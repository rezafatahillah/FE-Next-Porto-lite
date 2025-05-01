import { InferType, number, object, string } from "yup";
import { optional } from "zod";

// ----------------------------------------------------------------------

export const EducationCreateSchema = object().shape({
  education: string().required(""),
  name: string().required(""),
  status: string().required(""),
  study: string().required(""),
  yearStart : number().required(""),
  yearEnd: number().required(""),
  city: string().required(""),  
  sponsoredBy: string().optional(),
  // picture_id : number().optional(),
});

export interface IEducationCreateSchema extends InferType<typeof EducationCreateSchema> {}
