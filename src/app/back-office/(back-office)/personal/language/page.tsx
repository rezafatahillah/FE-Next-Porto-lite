import { CONFIG } from "@/config-global";

import { LanguageListView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Language | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <LanguageListView />;
}
