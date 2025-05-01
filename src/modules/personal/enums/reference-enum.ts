import { paths } from "@/utils/routes";

import { IReferenceEntity } from "../entities";

// ----------------------------------------------------------------------

export const REFERENCE_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Reference", href: paths.backOffice.personal.reference.root },
];

export const REFERENCE_CREATE_BREADCRUMB = [
  ...REFERENCE_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.reference.create },
];

export const REFERENCE_EDIT_BREADCRUMB = (
  id: IReferenceEntity["id"],
  name?: IReferenceEntity["name"]
) => [
  ...REFERENCE_BREADCRUMB,
  { name: name, href: paths.backOffice.personal.reference.edit(id) },
];
