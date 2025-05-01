import { CONFIG } from "@/config-global";

import { WorkListView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Work | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <WorkListView />;
}
