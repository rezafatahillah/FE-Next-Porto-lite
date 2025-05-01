import { CONFIG } from "@/config-global";

import { MedicalQuestionListView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `MedicalQuestion | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <MedicalQuestionListView />;
}
