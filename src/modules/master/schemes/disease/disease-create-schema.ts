import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const DiseaseCreateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface IDiseaseCreateSchema extends InferType<typeof DiseaseCreateSchema> {}
