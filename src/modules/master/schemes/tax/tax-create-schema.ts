import { InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const TaxCreateSchema = object().shape({
  name: string().required("Name is required"),
  picture_id : number().optional(),
});

export interface ITaxCreateSchema extends InferType<typeof TaxCreateSchema> {}
