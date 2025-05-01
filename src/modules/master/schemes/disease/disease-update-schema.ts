import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const DiseaseUpdateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface IDiseaseUpdateSchema extends InferType<typeof DiseaseUpdateSchema> {}
