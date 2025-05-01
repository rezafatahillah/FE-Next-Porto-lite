import { paths } from "@/utils/routes";

import { IGenderEntity } from "../entities";

// ----------------------------------------------------------------------

export const GENDER_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Gender", href: paths.backOffice.master.gender.root },
];

export const GENDER_CREATE_BREADCRUMB = [
  ...GENDER_BREADCRUMB,
  { name: "New", href: paths.backOffice.master.gender.create },
];

export const GENDER_EDIT_BREADCRUMB = (
  id: IGenderEntity["id"],
  name?: IGenderEntity["name"]
) => [
  ...GENDER_BREADCRUMB,
  { name: name, href: paths.backOffice.master.gender.edit(id) },
];
