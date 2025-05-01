import { CONFIG } from "@/config-global";

import { LanguageEditView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Language | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function LanguageEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <LanguageEditView id={id} />;
}
