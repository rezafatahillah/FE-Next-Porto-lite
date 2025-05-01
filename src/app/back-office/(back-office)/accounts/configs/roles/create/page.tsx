import { CONFIG } from "@/config-global";

import { AccessRoleCreateView } from "@/modules/account-management";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Role | Back Office - ${CONFIG.site.name}`,
};

export default function AccessRoleNewPage() {
  return <AccessRoleCreateView />;
}
