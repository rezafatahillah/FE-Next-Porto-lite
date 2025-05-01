import { CONFIG } from "@/config-global";

import { GenderCreateView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Gender | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <GenderCreateView />;
}
