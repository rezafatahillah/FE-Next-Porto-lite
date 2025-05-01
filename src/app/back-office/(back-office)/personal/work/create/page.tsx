import { CONFIG } from "@/config-global";

import { WorkCreateView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Work | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <WorkCreateView />;
}
