import { paths } from "@/utils/routes";

import { IMedicalQuestionEntity } from "../entities";

// ----------------------------------------------------------------------

export const MEDICALQUESTION_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "MedicalQuestion", href: paths.backOffice.master.medicalquestion.root },
];

export const MEDICALQUESTION_CREATE_BREADCRUMB = [
  ...MEDICALQUESTION_BREADCRUMB,
  { name: "New", href: paths.backOffice.master.medicalquestion.create },
];

export const MEDICALQUESTION_EDIT_BREADCRUMB = (
  id: IMedicalQuestionEntity["id"],
  name?: IMedicalQuestionEntity["name"]
) => [
  ...MEDICALQUESTION_BREADCRUMB,
  { name: name, href: paths.backOffice.master.medicalquestion.edit(id) },
];
