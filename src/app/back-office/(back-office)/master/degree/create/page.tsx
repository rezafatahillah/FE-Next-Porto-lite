import { CONFIG } from "@/config-global";

import { DegreeCreateView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Degree | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <DegreeCreateView />;
}
