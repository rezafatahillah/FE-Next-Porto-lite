import { CONFIG } from "@/config-global";

import { MedicalQuestionCreateView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New MedicalQuestion | Back Office - ${CONFIG.site.name}`,
};

export default function ProductNewPage() {
  return <MedicalQuestionCreateView />;
}
