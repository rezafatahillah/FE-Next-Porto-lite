import { InferType, number, object, string, date, array } from "yup";

// ----------------------------------------------------------------------

export const CandidateCreateSchema = object().shape({
  id: string().optional(),
  phone: string().optional(),
  gender: string().optional(),
  birthDate: date().optional(),
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

  ktp: string().optional(),
  kk: string().optional(),
  paspor: string().optional(),
  simA: string().optional(),
  simB: string().optional(),
  simC: string().optional(),
  bpjsKesehatan: string().optional(),
  bpjsKetenagakerjaan: string().optional(),
  npwp: string().optional(),
  statusPtkp: string().optional(),
  bankName: string().optional(),
  accountNo: string().optional(),
  accountName: string().optional(),

  workTerm: string().optional(),
  expectedSalary: number().optional(),
  otherFacility: string().optional(),
  availability: string().optional(),
  interest: array().of(
    object().shape({
      text: string().required(),
      value: string().optional(),
    })
  ).optional(),
  reason: string().optional(),
  strengths: array().of(
    object().shape({
      text: string().required(),
      value: string().optional(),
    })
  ).optional(),
  weaknesses: array().of(
    object().shape({
      text: string().required(),
      value: string().optional(),
    })
  ).optional(),
  weight: number().optional(),
  height: number().optional(),
  hospitalized: string().optional(),
  psychologicalTest: string().optional(),
  carOwnership: string().optional(),
  carBrand: string().optional(),
  carModel: string().optional(),
  carYear: number().optional(),
  bikeOwnership: string().optional(),
  bikeBrand: string().optional(),
  bikeModel: string().optional(),
  bikeYear: number().optional(),
});

export interface ICandidateCreateSchema extends InferType<typeof CandidateCreateSchema> {}
