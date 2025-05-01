import { paths } from "@/utils/routes";

import { IFamilyEntity } from "../entities";

// ----------------------------------------------------------------------

export const FAMILY_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Family", href: paths.backOffice.personal.family.root },
];

export const FAMILY_CREATE_BREADCRUMB = [
  ...FAMILY_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.family.create },
];

export const FAMILY_EDIT_BREADCRUMB = [
  ...FAMILY_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.family.edit },
];
