import { CONFIG } from "@/config-global";

import { JobFieldCreateView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New JobField | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <JobFieldCreateView />;
}
