import { CONFIG } from "@/config-global";

import { GenderEditView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Gender | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function GenderEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <GenderEditView id={id} />;
}
