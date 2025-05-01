import { paths } from "@/utils/routes";

import { IJobTypeEntity } from "../entities";

// ----------------------------------------------------------------------

export const JOBTYPE_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "JobType", href: paths.backOffice.master.jobtype.root },
];

export const JOBTYPE_CREATE_BREADCRUMB = [
  ...JOBTYPE_BREADCRUMB,
  { name: "New", href: paths.backOffice.master.jobtype.create },
];

export const JOBTYPE_EDIT_BREADCRUMB = (
  id: IJobTypeEntity["id"],
  name?: IJobTypeEntity["name"]
) => [
  ...JOBTYPE_BREADCRUMB,
  { name: name, href: paths.backOffice.master.jobtype.edit(id) },
];
