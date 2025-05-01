import { CONFIG } from "@/config-global";

import { UserCreateView } from "@/modules/human-resource";

// ----------------------------------------------------------------------

export const metadata = {
  title: `New User | Back Office - ${CONFIG.site.name}`,
};

export default function UserNewPage() {
  return <UserCreateView />;
}
