import { paths } from "@/utils/routes";

import { ISkillLevelEntity } from "../entities";

// ----------------------------------------------------------------------

export const SKILLLEVEL_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "SkillLevel", href: paths.backOffice.master.skilllevel.root },
];

export const SKILLLEVEL_CREATE_BREADCRUMB = [
  ...SKILLLEVEL_BREADCRUMB,
  { name: "New", href: paths.backOffice.master.skilllevel.create },
];

export const SKILLLEVEL_EDIT_BREADCRUMB = (
  id: ISkillLevelEntity["id"],
  name?: ISkillLevelEntity["name"]
) => [
  ...SKILLLEVEL_BREADCRUMB,
  { name: name, href: paths.backOffice.master.skilllevel.edit(id) },
];
