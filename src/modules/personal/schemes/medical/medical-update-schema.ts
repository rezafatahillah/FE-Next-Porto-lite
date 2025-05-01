import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const MedicalUpdateSchema = object().shape({
  diseaseId: number().required(""),
  answer : string().required(""),
});

export interface IMedicalUpdateSchema extends InferType<typeof MedicalUpdateSchema> {}
