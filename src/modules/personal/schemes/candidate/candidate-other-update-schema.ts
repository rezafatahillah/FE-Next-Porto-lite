import { InferType, number, object, string, array } from "yup";

// ----------------------------------------------------------------------

export const CandidateOtherUpdateSchema = object().shape({
  workTerm: string().optional(),
  expectedSalary: number().optional(),
  otherFacility: string().optional(),
  availability: string().optional(),
  interest: array()
    .of(object().shape({ text: string().required() }))
    .min(2, "Minimal harus ada 2 ")
    .required(""),
  strengths: array()
    .of(object().shape({ text: string().required() }))
    .optional(),
  weaknesses: array()
    .of(object().shape({ text: string().required() }))
    .optional(),
  reason: string().optional(),
  weight: number()
    .optional()
    .typeError("Berat badan harus berupa angka")
    .min(40, "Berat badan minimal 40 Kg")
    .max(150, "Berat badan maksimal 150 Kg"),
  height: number()
    .optional()
    .typeError("Tinggi badan harus berupa angka")
    .min(140, "Tinggi badan minimal 140 Cm")
    .max(220, "Tinggi badan maksimal 220 Cm"),
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

export interface ICandidateOtherUpdateSchema
  extends InferType<typeof CandidateOtherUpdateSchema> {}
