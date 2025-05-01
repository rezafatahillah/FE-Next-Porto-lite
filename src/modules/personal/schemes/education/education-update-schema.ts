import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const EducationUpdateSchema = object().shape({
  education: string().required(""),
  name: string().required(""),
  status : string().required(""),
  study  : string().required(""),
  yearStart : number().required(""),
  yearEnd : number().required(""),
  city : string().required(""),
  sponsoredBy : string().required(""),
  // picture_id : number().optional(),
});

export interface IEducationUpdateSchema extends InferType<typeof EducationUpdateSchema> {}
