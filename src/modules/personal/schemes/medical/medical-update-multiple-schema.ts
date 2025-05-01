import { InferType, array, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const MedicalUpdateMultipleSchema = object().shape({
  medicals: array(
    object().shape({
      id: number().required("Medical ID is required"),
      diseaseId: number().required("Disease ID is required"),
      answer: string().required("Answer is required"),
    })
  ).required("Medical records are required"),
});

export interface IMedicalUpdateMultipleSchema extends InferType<typeof MedicalUpdateMultipleSchema> {}
