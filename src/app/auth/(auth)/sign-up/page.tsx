import { CONFIG } from "@/config-global";

import { AuthSignUpView } from "@/modules/authentication";

// ----------------------------------------------------------------------

export const metadata = { title: `Sign Up - ${CONFIG.site.name}` };

export default function SignInPage() {
  return <AuthSignUpView />;
}
