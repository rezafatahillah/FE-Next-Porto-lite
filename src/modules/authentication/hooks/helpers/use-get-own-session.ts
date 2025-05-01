"use client";

import { useSession } from "next-auth/react";

// ----------------------------------------------------------------------

export const useGetOwnSession = () => {
  const { data: session, update } = useSession();

  const accessToken = session?.accessToken;
  const refreshToken = session?.refreshToken;
  const abilities = session?.abilities;
  const profile = session?.profile;

  const isAuthenticated = !!accessToken;
  const isEmailVerified = !!profile?.emailVerifiedAt;

  return {
    session,
    accessToken,
    refreshToken,
    abilities,
    profile,
    isAuthenticated,
    isEmailVerified,

    update,
  };
};
