import { CONFIG } from "@/config-global";

import { DiseaseListView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Disease | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <DiseaseListView />;
}
