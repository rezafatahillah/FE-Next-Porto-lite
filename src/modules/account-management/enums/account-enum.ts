import { paths } from "@/utils/routes";

import { IAccountEntity } from "../entities";
import { IUserEntity } from "@/modules/human-resource";

// ----------------------------------------------------------------------

export const ACCOUNT_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Account", href: paths.backOffice.accounts.root },
];

export const ACCOUNT_CREATE_BREADCRUMB = [
  ...ACCOUNT_BREADCRUMB,
  { name: "New", href: paths.backOffice.accounts.create },
];

export const ACCOUNT_EDIT_BREADCRUMB = (
  id: IAccountEntity["id"],
  name?: IUserEntity["name"]
) => [
  ...ACCOUNT_BREADCRUMB,
  { name: name, href: paths.backOffice.accounts.edit(id) },
];
