import { CONFIG } from '@/config-global';

import { AuthSignInView } from '@/modules/authentication';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in - ${CONFIG.site.name}` };

export default function SignInPage() {
  return <AuthSignInView />;
}
