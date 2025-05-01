import { CONFIG } from "@/config-global";

import { EducationListView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Education | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <EducationListView />;
}
