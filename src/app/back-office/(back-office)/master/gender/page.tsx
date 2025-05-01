import { CONFIG } from "@/config-global";

import { GenderListView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Gender | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <GenderListView />;
}
