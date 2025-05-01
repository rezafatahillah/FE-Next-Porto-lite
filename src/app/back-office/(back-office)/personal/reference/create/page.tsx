import { CONFIG } from "@/config-global";

import { ReferenceCreateView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Reference | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <ReferenceCreateView />;
}
