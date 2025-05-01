import { paths } from "@/utils/routes";

import { IDegreeEntity } from "../entities";

// ----------------------------------------------------------------------

export const DEGREE_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Degree", href: paths.backOffice.master.degree.root },
];

export const DEGREE_CREATE_BREADCRUMB = [
  ...DEGREE_BREADCRUMB,
  { name: "New", href: paths.backOffice.master.degree.create },
];

export const DEGREE_EDIT_BREADCRUMB = (
  id: IDegreeEntity["id"],
  name?: IDegreeEntity["name"]
) => [
  ...DEGREE_BREADCRUMB,
  { name: name, href: paths.backOffice.master.degree.edit(id) },
];
