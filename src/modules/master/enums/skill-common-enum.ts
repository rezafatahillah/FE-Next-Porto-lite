import { paths } from "@/utils/routes";

import { ISkillCommonEntity } from "../entities";

// ----------------------------------------------------------------------

export const SKILLCOMMON_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "SkillCommon", href: paths.backOffice.master.skillcommon.root },
];

export const SKILLCOMMON_CREATE_BREADCRUMB = [
  ...SKILLCOMMON_BREADCRUMB,
  { name: "New", href: paths.backOffice.master.skillcommon.create },
];

export const SKILLCOMMON_EDIT_BREADCRUMB = (
  id: ISkillCommonEntity["id"],
  name?: ISkillCommonEntity["name"]
) => [
  ...SKILLCOMMON_BREADCRUMB,
  { name: name, href: paths.backOffice.master.skillcommon.edit(id) },
];
