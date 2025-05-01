import { CONFIG } from "@/config-global";

import { TaxEditView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Tax | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function TaxEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <TaxEditView id={id} />;
}
