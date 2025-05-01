import { InferType, array, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const MedicalCreateMultipleSchema = object().shape({
  medicals: array(
    object().shape({
      diseaseId: number().required("Disease ID is required"),
      answer: string().required("Answer is required"),
    })
  ).required("Medical records are required"),
});

export interface IMedicalCreateMultipleSchema extends InferType<typeof MedicalCreateMultipleSchema> {}
