import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const SkillCommonCreateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface ISkillCommonCreateSchema extends InferType<typeof SkillCommonCreateSchema> {}
