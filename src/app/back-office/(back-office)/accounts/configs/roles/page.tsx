import { CONFIG } from "@/config-global";

import { AccessRoleListView } from "@/modules/account-management";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Account Role | Back Office - ${CONFIG.site.name}`,
};

export default function AccessRolePage() {
  return <AccessRoleListView />;
}
