import { CONFIG } from "@/config-global";

import { AuthRequestResetPasswordView } from "@/modules/authentication";

// ----------------------------------------------------------------------

export const metadata = { title: `Reset Password - ${CONFIG.site.name}` };

export default function RequestResetPasswordPage() {
  return <AuthRequestResetPasswordView />;
}
