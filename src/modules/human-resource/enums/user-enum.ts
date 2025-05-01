import { paths } from "@/utils/routes";

import { IUserEntity } from "../entities";

// ----------------------------------------------------------------------

export const USER_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "User", href: paths.backOffice.users.root },
];

export const USER_CREATE_BREADCRUMB = [
  ...USER_BREADCRUMB,
  { name: "New", href: paths.backOffice.users.create },
];

export const USER_EDIT_BREADCRUMB = (
  id: IUserEntity["id"],
  name?: IUserEntity["name"]
) => [
  ...USER_BREADCRUMB,
  { name: name, href: paths.backOffice.users.edit(id) },
];
