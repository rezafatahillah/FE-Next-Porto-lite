import { paths } from "@/utils/routes";

import { IDoctypeEntity } from "../entities";

// ----------------------------------------------------------------------

export const DOCTYPE_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Doctype", href: paths.backOffice.personal.doctype.root },
];

export const DOCTYPE_CREATE_BREADCRUMB = [
  ...DOCTYPE_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.doctype.create },
];

export const DOCTYPE_EDIT_BREADCRUMB = (
  id: IDoctypeEntity["id"],
  name?: IDoctypeEntity["name"]
) => [
  ...DOCTYPE_BREADCRUMB,
  { name: name, href: paths.backOffice.personal.doctype.edit(id) },
];
