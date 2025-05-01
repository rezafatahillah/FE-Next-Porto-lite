import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const LanguageUpdateSchema = object().shape({
  name: string().required("Name is required"),
  skillLevel : string().required(""),
});

export interface ILanguageUpdateSchema extends InferType<typeof LanguageUpdateSchema> {}
