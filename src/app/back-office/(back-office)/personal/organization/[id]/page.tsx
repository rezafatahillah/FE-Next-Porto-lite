import { CONFIG } from "@/config-global";

import { OrganizationEditView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Organization | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function OrganizationEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <OrganizationEditView id={id} />;
}
