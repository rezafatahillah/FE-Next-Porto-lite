import { CONFIG } from "@/config-global";

import { DiseaseCreateView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Disease | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <DiseaseCreateView />;
}
