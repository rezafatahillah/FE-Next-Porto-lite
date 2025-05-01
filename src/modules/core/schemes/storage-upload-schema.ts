import { InferType, mixed, object } from 'yup';

import { StorageCodeConst, StorageCodeEnum } from '../enums';

// ----------------------------------------------------------------------

export const StorageUploadSchema = object().shape({
  code: mixed<StorageCodeEnum>()
    .oneOf(Object.values(StorageCodeConst))
    .required('Code is required'),
  file: mixed().required('File is required'),
});

export interface IStorageUploadSchema extends InferType<typeof StorageUploadSchema> {}
