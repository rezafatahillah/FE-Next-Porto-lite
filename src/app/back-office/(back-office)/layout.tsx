import { DashboardLayout } from "@/templates-ui/layouts/dashboard";

import {
  AlertEmailVerification,
  AuthGuard,
  getOwnServerSession,
} from "@/modules/authentication";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  const { isEmailVerified, isRoled } = await getOwnServerSession();

  return (
    <AuthGuard>
      <DashboardLayout  currentRole={isRoled ?? ""}>
        <AlertEmailVerification isEmailVerified={isEmailVerified} />
        {children}
      </DashboardLayout>
    </AuthGuard>
  );
}
