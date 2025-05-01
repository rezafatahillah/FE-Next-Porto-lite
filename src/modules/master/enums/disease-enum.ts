import { paths } from "@/utils/routes";

import { IDiseaseEntity } from "../entities";

// ----------------------------------------------------------------------

export const DISEASE_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Disease", href: paths.backOffice.master.disease.root },
];

export const DISEASE_CREATE_BREADCRUMB = [
  ...DISEASE_BREADCRUMB,
  { name: "New", href: paths.backOffice.master.disease.create },
];

export const DISEASE_EDIT_BREADCRUMB = (
  id: IDiseaseEntity["id"],
  name?: IDiseaseEntity["name"]
) => [
  ...DISEASE_BREADCRUMB,
  { name: name, href: paths.backOffice.master.disease.edit(id) },
];
