import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const MedicalQuestionUpdateSchema = object().shape({
  name: string().required("Name is required"),
  groupId: number().optional(),
  picture_id : number().optional(),
});

export interface IMedicalQuestionUpdateSchema extends InferType<typeof MedicalQuestionUpdateSchema> {}
