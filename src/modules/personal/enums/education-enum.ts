import { paths } from "@/utils/routes";

import { IEducationEntity } from "../entities";

// ----------------------------------------------------------------------

export const EDUCATION_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Education", href: paths.backOffice.personal.education.root },
];

export const EDUCATION_CREATE_BREADCRUMB = [
  ...EDUCATION_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.education.create },
];

export const EDUCATION_EDIT_BREADCRUMB = [
  ...EDUCATION_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.education.edit },
];
