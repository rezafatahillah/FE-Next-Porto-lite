import { InferType, array, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const DoctypeCreateMultipleSchema = object().shape({
  doctypes: array(
    object()
      .shape({
        group: string().required(),
        fileId: number().optional(),
      })
      .test(
        "validate-required-fields",
        "harus di isi",
        function (value, context) {
          const { path } = context;
          const index = parseInt(path.split("[")[1]?.split("]")[0], 10);

          if ([0, 1, 4, 6, 7].includes(index)) {
            if (!value?.fileId) {
              console.log(`Validation failed at index ${index}: fileId are missing.`);
              return this.createError({
                message: `File ID is required at index ${index}`,
              });
            }
          }

          return true;
        }
      )
  ).required("Doctype records are required"),
});

export interface IDoctypeCreateMultipleSchema
  extends InferType<typeof DoctypeCreateMultipleSchema> {}
