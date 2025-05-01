import { paths } from "@/utils/routes";

import { IMedicalEntity } from "../entities";

// ----------------------------------------------------------------------

export const MEDICAL_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Medical", href: paths.backOffice.personal.medical.root },
];

export const MEDICAL_CREATE_BREADCRUMB = [
  ...MEDICAL_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.medical.root },
];

export const MEDICAL_EDIT_BREADCRUMB = [
  ...MEDICAL_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.medical.root },
];

