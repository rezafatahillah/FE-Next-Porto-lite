import { CONFIG } from "@/config-global";

import { AccountCreateView } from "@/modules/account-management";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New Account | Back Office - ${CONFIG.site.name}`,
};

export default function AccountNewPage() {
  return <AccountCreateView />;
}
