import { CONFIG } from "@/config-global";

import { SkillLevelCreateView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New SkillLevel | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <SkillLevelCreateView />;
}
