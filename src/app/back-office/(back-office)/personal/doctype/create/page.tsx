import { CONFIG } from "@/config-global";

import { DoctypeCreateView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Dokumen | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <DoctypeCreateView />;
}
