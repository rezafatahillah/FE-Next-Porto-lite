import { CONFIG } from "@/config-global";

import { MedicalQuestionEditView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit MedicalQuestion | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function MedicalQuestionEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <MedicalQuestionEditView id={id} />;
}
