import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const SkillUpdateSchema = object().shape({
  skillCommonId: number().required("Name is required"),
  skillLevel : string().required(""),
});

export interface ISkillUpdateSchema extends InferType<typeof SkillUpdateSchema> {}
