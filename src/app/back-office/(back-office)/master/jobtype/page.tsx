import { CONFIG } from "@/config-global";

import { JobTypeListView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `JobType | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <JobTypeListView />;
}
