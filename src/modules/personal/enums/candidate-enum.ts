import { paths } from "@/utils/routes";

import { ICandidateEntity } from "../entities";

// ----------------------------------------------------------------------

export const CANDIDATE_BREADCRUMB = [
  { name: "Dashboard", href: paths.backOffice.root },
  { name: "Candidate", href: paths.backOffice.personal.profile.root },
];

export const CANDIDATE_CREATE_BREADCRUMB = [
  ...CANDIDATE_BREADCRUMB,
  { name: "New", href: paths.backOffice.personal.profile.root },
];

export const CANDIDATE_PROFILE_EDIT_BREADCRUMB = (
  id: ICandidateEntity["id"],
  name?: ICandidateEntity["name"]
) => [
  ...CANDIDATE_BREADCRUMB,
  { name: name, href: paths.backOffice.personal.profile.root },
];

export const CANDIDATE_IDENTITY_EDIT_BREADCRUMB = (
  id: ICandidateEntity["id"],
  name?: ICandidateEntity["name"]
) => [
  ...CANDIDATE_BREADCRUMB,
  { name: name, href: paths.backOffice.personal.identity.root },
];

export const CANDIDATE_OTHER_EDIT_BREADCRUMB = (
  id: ICandidateEntity["id"],
  name?: ICandidateEntity["name"]
) => [
  ...CANDIDATE_BREADCRUMB,
  { name: name, href: paths.backOffice.personal.other.root },
];
