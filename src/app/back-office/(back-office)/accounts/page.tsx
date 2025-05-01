import { CONFIG } from "@/config-global";

import { AccountListView } from "@/modules/account-management";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Account | Back Office - ${CONFIG.site.name}`,
};

export default function AccountPage() {
  return <AccountListView />;
}
