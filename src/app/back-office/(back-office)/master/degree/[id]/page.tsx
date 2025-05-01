import { CONFIG } from "@/config-global";

import { DegreeEditView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Degree | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function DegreeEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <DegreeEditView id={id} />;
}
