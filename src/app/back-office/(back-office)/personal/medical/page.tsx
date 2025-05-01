import { CONFIG } from "@/config-global";

import { MedicalEditAllView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Medical | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <MedicalEditAllView />;
}
