import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const MedicalQuestionCreateSchema = object().shape({
  name: string().required("Name is required"),
  groupId: number().optional(),
  picture_id : number().optional(),
});

export interface IMedicalQuestionCreateSchema extends InferType<typeof MedicalQuestionCreateSchema> {}
