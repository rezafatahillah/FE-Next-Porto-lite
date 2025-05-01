import { CONFIG } from "@/config-global";

import { ReferenceEditView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Reference | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function ReferenceEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <ReferenceEditView id={id} />;
}
