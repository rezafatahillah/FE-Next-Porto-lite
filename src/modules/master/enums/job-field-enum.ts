import { paths } from "@/utils/routes";

import { IJobFieldEntity } from "../entities";

// ----------------------------------------------------------------------

export const JOBFIELD_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "JobField", href: paths.backOffice.master.jobfield.root },
];

export const JOBFIELD_CREATE_BREADCRUMB = [
  ...JOBFIELD_BREADCRUMB,
  { name: "New", href: paths.backOffice.master.jobfield.create },
];

export const JOBFIELD_EDIT_BREADCRUMB = (
  id: IJobFieldEntity["id"],
  name?: IJobFieldEntity["name"]
) => [
  ...JOBFIELD_BREADCRUMB,
  { name: name, href: paths.backOffice.master.jobfield.edit(id) },
];
