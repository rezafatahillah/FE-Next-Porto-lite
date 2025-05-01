import { CONFIG } from "@/config-global";

import { SkillCommonCreateView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New SkillCommon | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <SkillCommonCreateView />;
}
