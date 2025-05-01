import { InferType, number, object } from 'yup';

// ----------------------------------------------------------------------

export const AccountUpdateRoleSchema = object().shape({
  roleId: number()
    .required('Role is required')
    .nullable()
    .transform(currentValue => (currentValue === null ? undefined : currentValue)),
});

export interface IAccountUpdateRoleSchema extends InferType<typeof AccountUpdateRoleSchema> {}
