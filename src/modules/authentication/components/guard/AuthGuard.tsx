"use server";

import { getOwnServerSession } from "@/modules/authentication";
import { paths } from "@/utils/routes";
import { redirect } from "next/navigation";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export async function AuthGuard(props: Props) {
  const { children } = props;

  const { isAuthenticated } = await getOwnServerSession();

  if (!isAuthenticated) {
    redirect(paths.auth.jwt.signIn);
  }

  return <>{children}</>;
}
