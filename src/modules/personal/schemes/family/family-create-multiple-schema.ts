import { InferType, array, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const FamilyCreateMultipleSchema = object().shape({
  familys: array(
    object().shape({
      main: number().optional(),
      name: string().required("Required"),
      status: string().required("Required"),
      birthDate: string().required("Required"),
      education: string().required("Required"),
      job: string().required("Required"),
    })
  ).optional(),
  siblings: array(
    object().shape({
      main: number().optional(),
      name: string().required("Required"),
      status: string().required("Required"),
      birthDate: string().required("Required"),
      education: string().required("Required"),
      job: string().required("Required"),
    })
  ).optional(),
  childrens: array(
    object().shape({
      main: number().optional(),
      name: string().required("Required"),
      status: string().required("Required"),
      birthDate: string().required("Required"),
      education: string().required("Required"),
      job: string().required("Required"),
    })
  ).optional(),
});

export interface IFamilyCreateMultipleSchema
  extends InferType<typeof FamilyCreateMultipleSchema> {}
