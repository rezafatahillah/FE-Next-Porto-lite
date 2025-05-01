import { InferType, number, object, string } from "yup";
import dayjs from "dayjs";

// ----------------------------------------------------------------------

export const OrganizationUpdateSchema = object().shape({
  name: string().required("Name is required"),
  type : string().required(""),
  year: string().required("Required"),
  // year: number()
  //   .required("Year is required")
  //   .min(1970, "Year must be greater than or equal to 1970")
  //   .max(dayjs().year(), `Year must be less than or equal to the current year`),
  position : string().required(""),
});

export interface IOrganizationUpdateSchema extends InferType<typeof OrganizationUpdateSchema> {}
