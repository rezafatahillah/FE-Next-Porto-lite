import { paths } from "@/utils/routes";

import { ITaxEntity } from "../entities";

// ----------------------------------------------------------------------

export const TAX_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Tax", href: paths.backOffice.master.tax.root },
];

export const TAX_CREATE_BREADCRUMB = [
  ...TAX_BREADCRUMB,
  { name: "New", href: paths.backOffice.master.tax.create },
];

export const TAX_EDIT_BREADCRUMB = (
  id: ITaxEntity["id"],
  name?: ITaxEntity["name"]
) => [
  ...TAX_BREADCRUMB,
  { name: name, href: paths.backOffice.master.tax.edit(id) },
];
