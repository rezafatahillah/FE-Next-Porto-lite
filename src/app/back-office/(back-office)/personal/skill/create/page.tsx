import { CONFIG } from "@/config-global";

import { SkillCreateView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Skill | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <SkillCreateView />;
}
