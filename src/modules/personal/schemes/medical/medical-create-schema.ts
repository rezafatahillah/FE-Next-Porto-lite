
import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const MedicalCreateSchema = object().shape({
  diseaseId: number().required(""),
  answer : string().required(""),
});

export interface IMedicalCreateSchema extends InferType<typeof MedicalCreateSchema> {}
