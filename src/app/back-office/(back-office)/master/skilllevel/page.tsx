import { CONFIG } from "@/config-global";

import { SkillLevelListView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `SkillLevel | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <SkillLevelListView />;
}
