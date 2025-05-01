import { InferType, object, ref, string } from "yup";

// ----------------------------------------------------------------------

export const ProfileUpdateProfileSchema = object().shape({
  name: string().optional(),
});

export interface IProfileUpdateProfileSchema
  extends InferType<typeof ProfileUpdateProfileSchema> {}
