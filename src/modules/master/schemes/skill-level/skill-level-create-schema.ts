import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const SkillLevelCreateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface ISkillLevelCreateSchema extends InferType<typeof SkillLevelCreateSchema> {}
