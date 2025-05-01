import { paths } from "@/utils/routes";

import { ILanguageEntity } from "../entities";

// ----------------------------------------------------------------------

export const LANGUAGE_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Language", href: paths.backOffice.personal.language.root },
];

export const LANGUAGE_CREATE_BREADCRUMB = [
  ...LANGUAGE_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.language.create },
];

export const LANGUAGE_EDIT_BREADCRUMB = (
  id: ILanguageEntity["id"],
  name?: ILanguageEntity["name"]
) => [
  ...LANGUAGE_BREADCRUMB,
  { name: name, href: paths.backOffice.personal.language.edit(id) },
];
