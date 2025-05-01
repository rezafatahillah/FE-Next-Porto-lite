import { CONFIG } from "@/config-global";

import { JobFieldListView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `JobField | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <JobFieldListView />;
}
