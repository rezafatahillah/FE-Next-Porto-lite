import { array, InferType, mixed, object } from 'yup';

import { StorageCodeConst, StorageCodeEnum } from '../enums';

// ----------------------------------------------------------------------

export const StorageMultipleUploadSchema = object().shape({
  code: mixed<StorageCodeEnum>()
    .oneOf(Object.values(StorageCodeConst))
    .required('Code is required'),
  files: array().of(mixed().required('Files is required')),
});

export interface IStorageMultipleUploadSchema
  extends InferType<typeof StorageMultipleUploadSchema> {}
