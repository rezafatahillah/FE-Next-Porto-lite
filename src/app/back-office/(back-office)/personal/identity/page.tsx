import { CONFIG } from "@/config-global";

import { CandidateIdentityEditView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Candidate | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <CandidateIdentityEditView />;
}
