import { InferType, number, object, string, date, array } from "yup";

// ----------------------------------------------------------------------

export const CandidateIdentityUpdateSchema = object().shape({
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
});

export interface ICandidateIdentityUpdateSchema extends InferType<typeof CandidateIdentityUpdateSchema> {}
