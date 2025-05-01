import { CONFIG } from "@/config-global";

import { MaritalStatusEditView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit MaritalStatus | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function MaritalStatusEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <MaritalStatusEditView id={id} />;
}
