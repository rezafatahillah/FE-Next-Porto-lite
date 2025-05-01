import { CONFIG } from "@/config-global";

import { TaxListView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Tax | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <TaxListView />;
}
