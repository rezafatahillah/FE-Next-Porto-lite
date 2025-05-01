import { boolean, InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const SkillCommonUpdateSchema = object().shape({
  name: string().required("Name is required"),
  slug: string().required("Name is required"),
  published: number().oneOf([0, 1]).required("Published is required"),
});

export interface ISkillCommonUpdateSchema extends InferType<typeof SkillCommonUpdateSchema> {}
