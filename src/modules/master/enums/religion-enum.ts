import { paths } from "@/utils/routes";

import { IReligionEntity } from "../entities";

// ----------------------------------------------------------------------

export const RELIGION_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Religion", href: paths.backOffice.master.religion.root },
];

export const RELIGION_CREATE_BREADCRUMB = [
  ...RELIGION_BREADCRUMB,
  { name: "New", href: paths.backOffice.master.religion.create },
];

export const RELIGION_EDIT_BREADCRUMB = (
  id: IReligionEntity["id"],
  name?: IReligionEntity["name"]
) => [
  ...RELIGION_BREADCRUMB,
  { name: name, href: paths.backOffice.master.religion.edit(id) },
];
