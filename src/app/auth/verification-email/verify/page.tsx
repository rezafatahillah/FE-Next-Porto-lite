import { CONFIG } from "@/config-global";

import { AuthEmailVerificationView, AuthGuard } from "@/modules/authentication";

// ----------------------------------------------------------------------

export const metadata = { title: `Email Verification - ${CONFIG.site.name}` };

export default function VerifyPage() {
  return (
    <AuthGuard>
      <AuthEmailVerificationView />
    </AuthGuard>
  );
}
