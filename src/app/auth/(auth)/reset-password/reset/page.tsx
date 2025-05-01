import { CONFIG } from "@/config-global";

import { AuthResetPasswordView } from "@/modules/authentication";

// ----------------------------------------------------------------------

export const metadata = { title: `Update Password - ${CONFIG.site.name}` };

export default function ResetPasswordPage() {
  return <AuthResetPasswordView />;
}
