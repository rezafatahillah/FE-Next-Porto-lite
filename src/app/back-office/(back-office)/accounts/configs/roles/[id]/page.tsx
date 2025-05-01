import { CONFIG } from "@/config-global";

import { AccessRoleEditView } from "@/modules/account-management";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Role | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: string };
}

export default function AccessRoleEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <AccessRoleEditView id={parseInt(id)} />;
}
