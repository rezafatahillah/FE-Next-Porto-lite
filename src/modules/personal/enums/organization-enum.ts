import { paths } from "@/utils/routes";

import { IOrganizationEntity } from "../entities";

// ----------------------------------------------------------------------

export const ORGANIZATION_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Organization", href: paths.backOffice.personal.organization.root },
];

export const ORGANIZATION_CREATE_BREADCRUMB = [
  ...ORGANIZATION_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.organization.create },
];

export const ORGANIZATION_EDIT_BREADCRUMB = (
  id: IOrganizationEntity["id"],
  name?: IOrganizationEntity["name"]
) => [
  ...ORGANIZATION_BREADCRUMB,
  { name: name, href: paths.backOffice.personal.organization.edit(id) },
];
