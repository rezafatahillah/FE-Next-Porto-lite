import { paths } from '@/utils/routes';

import { IAccessRoleEntity } from '../entities';
import { ACCOUNT_BREADCRUMB } from './account-enum';

// ----------------------------------------------------------------------

export const ACCESS_ROLE_BREADCRUMB = [
  ...ACCOUNT_BREADCRUMB,
  { name: 'Role', href: paths.backOffice.accounts.configs.roles.root },
];

export const ACCESS_ROLE_CREATE_BREADCRUMB = [
  ...ACCESS_ROLE_BREADCRUMB,
  { name: 'New', href: paths.backOffice.accounts.configs.roles.create },
];

export const ACCESS_ROLE_EDIT_BREADCRUMB = (
  id: IAccessRoleEntity['id'],
  name?: IAccessRoleEntity['name']
) => [
  ...ACCESS_ROLE_BREADCRUMB,
  { name: name, href: paths.backOffice.accounts.configs.roles.edit(id) },
];
