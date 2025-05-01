import { boolean, InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const WorkUpdateSchema = object().shape({
  companyName: string().required("Nama perusahaan wajib diisi "),
  position: string().required("Posisi wajib diisi"),
  supervisor: string().required("Atasan wajib diisi"),

  start: string().required("Mulai kerja wajib diisi"),
  stillWorking: boolean().optional(),
  end: string().when("stillWorking", {
    is: false,
    then: (schema) =>
      schema
        .required("Berakhir kerja wajib diisi")
        // .matches(
        //   /^\d{4}-\d{2}-\d{2}$/,
        //   "Berakhir harus dalam format YYYY-MM-DD"
        // )
        .test(
          "is-after-start",
          "Tanggal berakhir kerja harus setelah tanggal mulai kerja",
          function (value) {
            const { start } = this.parent;
            return !start || !value || new Date(value) >= new Date(start);
          }
        ),
    otherwise: (schema) => schema.notRequired(),
  }),
  salary: number()
    .required("Gaji wajib diisi")
    .min(1000000, "Gaji minimal 7 digit angka")
    .max(1000000000, "Gaji maksimal 10 digit angka")
    .integer("Gaji harus berupa angka bulat"),

  // .matches(/^\d+$/, "Salary must be a valid number"),

  jobdesk: string().required("Jelaskan pekerjaan anda wajib diisi"),
  reason: string().required("Alasan keluar wajib diisi"),
});

export interface IWorkUpdateSchema extends InferType<typeof WorkUpdateSchema> {}
