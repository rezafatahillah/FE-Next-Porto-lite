import { InferType, number, object, string, date, array } from "yup";

// ----------------------------------------------------------------------

export const CandidateProfileUpdateSchema = object().shape({
  pictureId: number().optional(),
  name: string().optional(),
  email: string().optional(),
  phone: string().optional(),
  gender: string().optional(),
  birthDate: string().optional(),  
  birthPlace: string().optional(),
  religion: string().optional(),
  marital: string().optional(),
  otherReligion: string().optional(),
  hobby: string().optional(),
  summary: string().optional(),
  address: string().optional(),
  city: string().optional(),
  postal: string().optional(),
  addressDomicile: string().optional(),
  cityDomicile: string().optional(),
  postalDomicile: string().optional(),
});

export interface ICandidateProfileUpdateSchema extends InferType<typeof CandidateProfileUpdateSchema> {}
