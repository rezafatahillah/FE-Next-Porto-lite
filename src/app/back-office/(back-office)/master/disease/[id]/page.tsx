import { CONFIG } from "@/config-global";

import { DiseaseEditView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Disease | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function DiseaseEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <DiseaseEditView id={id} />;
}
