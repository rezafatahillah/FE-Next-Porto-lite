import { paths } from "@/utils/routes";

import { GuestGuard } from "@/modules/authentication";
import { AuthSplitLayout } from "@/templates-ui/layouts/auth-split";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <GuestGuard redirectPath={paths.backOffice.root}>
      <AuthSplitLayout section={{ title: "Hi, Welcome back" }}>
        {children}
      </AuthSplitLayout>
    </GuestGuard>
  );
}
