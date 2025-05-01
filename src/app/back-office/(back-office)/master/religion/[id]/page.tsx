import { CONFIG } from "@/config-global";

import { ReligionEditView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Religion | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function ReligionEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <ReligionEditView id={id} />;
}
