import { CONFIG } from "@/config-global";

import { FamilyListView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Family | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <FamilyListView />;
}
