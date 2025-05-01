import { paths } from "@/utils/routes";

import { ISkillEntity } from "../entities";

// ----------------------------------------------------------------------

export const SKILL_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Skill", href: paths.backOffice.personal.skill.root },
];

export const SKILL_CREATE_BREADCRUMB = [
  ...SKILL_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.skill.create },
];

export const SKILL_EDIT_BREADCRUMB = (
  id: ISkillEntity["id"],
  // name?: ISkillEntity["name"]
  name?: "test"
) => [
  ...SKILL_BREADCRUMB,
  { name: name, href: paths.backOffice.personal.skill.edit(id) },
];
