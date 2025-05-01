import { CONFIG } from "@/config-global";

import { ReligionListView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Religion | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <ReligionListView />;
}
