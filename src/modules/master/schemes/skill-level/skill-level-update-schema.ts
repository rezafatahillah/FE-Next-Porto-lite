import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const SkillLevelUpdateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface ISkillLevelUpdateSchema extends InferType<typeof SkillLevelUpdateSchema> {}
