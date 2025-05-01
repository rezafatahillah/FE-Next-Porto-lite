import { CONFIG } from "@/config-global";

import { SkillListView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Skill | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <SkillListView />;
}
