import { CONFIG } from "@/config-global";

import { UserListView } from "@/modules/human-resource";

// ----------------------------------------------------------------------

export const metadata = {
  title: `User | Back Office - ${CONFIG.site.name}`,
};

export default function UserPage() {
  return <UserListView />;
}
