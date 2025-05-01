import { CONFIG } from "@/config-global";

import { SkillCommonListView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `SkillCommon | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <SkillCommonListView />;
}
