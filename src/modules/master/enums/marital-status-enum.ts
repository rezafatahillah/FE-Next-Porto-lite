import { paths } from "@/utils/routes";

import { IMaritalStatusEntity } from "../entities";

// ----------------------------------------------------------------------

export const MARITALSTATUS_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "MaritalStatus", href: paths.backOffice.master.maritalstatus.root },
];

export const MARITALSTATUS_CREATE_BREADCRUMB = [
  ...MARITALSTATUS_BREADCRUMB,
  { name: "New", href: paths.backOffice.master.maritalstatus.create },
];

export const MARITALSTATUS_EDIT_BREADCRUMB = (
  id: IMaritalStatusEntity["id"],
  name?: IMaritalStatusEntity["name"]
) => [
  ...MARITALSTATUS_BREADCRUMB,
  { name: name, href: paths.backOffice.master.maritalstatus.edit(id) },
];
