import { CONFIG } from "@/config-global";

import { OrganizationCreateView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Organization | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <OrganizationCreateView />;
}
