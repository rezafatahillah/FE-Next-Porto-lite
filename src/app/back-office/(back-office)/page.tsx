import { CONFIG } from '@/config-global';

import { OverviewAppView } from '@/modules/core';

// ----------------------------------------------------------------------

export const metadata = {
  title: `App | Back Office - ${CONFIG.site.name}`,
};

export default function OverviewAppPage() {
  return <OverviewAppView />;
}
