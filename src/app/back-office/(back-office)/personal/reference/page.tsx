import { CONFIG } from "@/config-global";

import { ReferenceListView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Reference | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <ReferenceListView />;
}
