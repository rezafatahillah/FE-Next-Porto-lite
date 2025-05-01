import { InferType, array, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const FamilyUpdateMultipleSchema = object().shape({
  familys: array(
    object().shape({
      id: number().required(),
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
      id: number().required(),
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
      id: number().required(),
      main: number().optional(),
      name: string().required("Required"),
      status: string().required("Required"),
      birthDate: string().required("Required"),
      education: string().required("Required"),
      job: string().required("Required"),
    })
  ).optional(),
});

export interface IFamilyUpdateMultipleSchema
  extends InferType<typeof FamilyUpdateMultipleSchema> {}
