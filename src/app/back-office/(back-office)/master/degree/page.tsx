import { CONFIG } from "@/config-global";

import { DegreeListView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Degree | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <DegreeListView />;
}
