import { CONFIG } from "@/config-global";

import { DoctypeListView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Dokumen | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <DoctypeListView />;
}
