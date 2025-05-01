import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const LanguageCreateSchema = object().shape({
  name: string().required("Name is required"),
  skillLevel : string().required(""),
});

export interface ILanguageCreateSchema extends InferType<typeof LanguageCreateSchema> {}
