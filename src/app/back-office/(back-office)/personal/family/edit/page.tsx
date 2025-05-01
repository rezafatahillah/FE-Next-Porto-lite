import { CONFIG } from "@/config-global";

import { FamilyEditView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Family | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <FamilyEditView />;
}
