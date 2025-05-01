'use server';

import { getOwnServerSession } from '@/modules/authentication';
import { paths } from '@/utils/routes';
import { redirect } from 'next/navigation';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  redirectPath?: string;
};

export async function GuestGuard(props: Props) {
  const { children, redirectPath } = props;

  const { isAuthenticated } = await getOwnServerSession();

  if (isAuthenticated) {
    redirect(redirectPath || paths.root);
  }

  return <>{children}</>;
}
