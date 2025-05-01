import { InferType, mixed, object } from "yup";

// ----------------------------------------------------------------------

export const StorageUploadDirectSchema = object().shape({
  file: mixed().required("File is required"),
});

export interface IStorageUploadDirectSchema
  extends InferType<typeof StorageUploadDirectSchema> {}
