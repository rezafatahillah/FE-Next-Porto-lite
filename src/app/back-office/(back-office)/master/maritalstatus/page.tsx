import { CONFIG } from "@/config-global";

import { MaritalStatusListView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `MaritalStatus | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <MaritalStatusListView />;
}
