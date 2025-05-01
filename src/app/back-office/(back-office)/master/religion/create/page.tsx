import { CONFIG } from "@/config-global";

import { ReligionCreateView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Religion | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <ReligionCreateView />;
}
