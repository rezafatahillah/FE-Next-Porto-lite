import { CONFIG } from "@/config-global";

import { EducationEditView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Education | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <EducationEditView />;
}
