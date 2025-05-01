import { CONFIG } from "@/config-global";

import { DoctypeEditView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Doctype | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <DoctypeEditView />;
}
