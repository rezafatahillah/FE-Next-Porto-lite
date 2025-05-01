import { array, InferType, number, object, string } from 'yup';

// ----------------------------------------------------------------------

export const AccessRoleCreateUpdateSchema = object().shape({
  name: string().required('Name is required'),
  permissions: array().of(number().required('Permission is required')).optional(),
});

export interface IAccessRoleCreateUpdateSchema
  extends InferType<typeof AccessRoleCreateUpdateSchema> {}
