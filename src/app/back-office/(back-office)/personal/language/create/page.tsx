import { CONFIG } from "@/config-global";

import { LanguageCreateView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Language | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <LanguageCreateView />;
}
