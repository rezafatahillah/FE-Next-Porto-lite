import { CONFIG } from "@/config-global";

import { TaxCreateView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Tax | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <TaxCreateView />;
}
