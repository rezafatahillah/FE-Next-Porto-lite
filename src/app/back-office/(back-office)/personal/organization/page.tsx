import { CONFIG } from "@/config-global";

import { OrganizationListView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Organization | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <OrganizationListView />;
}
