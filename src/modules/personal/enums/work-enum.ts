import { paths } from "@/utils/routes";

import { IWorkEntity } from "../entities";

// ----------------------------------------------------------------------

export const WORK_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Work", href: paths.backOffice.personal.work.root },
];

export const WORK_CREATE_BREADCRUMB = [
  ...WORK_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.work.create },
];

export const WORK_EDIT_BREADCRUMB = (
  id: IWorkEntity["id"],
  // name?: IWorkEntity["name"]
  name?: "test"
) => [
  ...WORK_BREADCRUMB,
  { name: name, href: paths.backOffice.personal.work.edit(id) },
];
