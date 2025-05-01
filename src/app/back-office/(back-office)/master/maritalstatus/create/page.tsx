import { CONFIG } from "@/config-global";

import { MaritalStatusCreateView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New MaritalStatus | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <MaritalStatusCreateView />;
}
