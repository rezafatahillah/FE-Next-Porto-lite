import { InferType, mixed, object, string } from "yup";

export const SkillCreateSchema = object().shape({
  skillCommonId: mixed()
    .test(
      "is-number-or-string",
      "SkillCommonId must be a number or a valid string",
      (value) => typeof value === "number" || typeof value === "string"
    )
    .required("SkillCommonId is required"),
  // .test(
  //   "is-valid-skill-common-id",
  //   "SkillCommonId is required and must be a valid selection or input",
  //   (value) =>
  //     value !== undefined &&
  //     (typeof value === "string" && value.trim() !== "") 
  // )
  // .required("SkillCommonId is required"),
  skillLevel: string().required("Skill level is required"),
});


export interface ISkillCreateSchema extends InferType<typeof SkillCreateSchema> {}
