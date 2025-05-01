import { CONFIG } from "@/config-global";

import { WorkEditView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Work | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function WorkEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <WorkEditView id={id} />;
}
