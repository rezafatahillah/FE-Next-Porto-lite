import { array, boolean, InferType, number, object, string } from "yup";

// ----------------------------------------------------------------------

export const EducationCreateMultipleSchema = object().shape({
  formals: array(
    object()
      .shape({
        status: string().optional(),
        education: string().optional(),
        name: string().optional(),
        city: string().optional(),
        study: string().optional(),
        yearStart: string().optional(),
        yearEnd: string().optional(),
      })
      .test(
        "at-least-one-field-required",
        "Each of the first three formal education entries must have at least one field filled",
        (value, context) => {
          if (!value) return false;

          const indexMatch = context.path.match(/\d+/);
          const index = indexMatch ? parseInt(indexMatch[0], 10) : -1;

          if (index >= 0 && index <= 2) {
            const isValid =
              !!value.name ||
              !!value.city ||
              !!value.study ||
              !!value.yearStart ||
              !!value.yearEnd;

            return isValid;
          }

          return true;
        }
      )
  ).min(3, "At least 3 formal education entries are required"),

  informals: array(
    object().shape({
      status: string().required("Required"),
      education: string().required("Required"),
      name: string().required("Required"),
      duration: number().optional(),
      yearInformal: string().optional(),
      certificate: boolean().optional(),
    })
  ).optional(),
});

export interface IEducationCreateMultipleSchema
  extends InferType<typeof EducationCreateMultipleSchema> {}
