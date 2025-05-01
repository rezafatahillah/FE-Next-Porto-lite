"use server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/libs/next-auth/config";

// ----------------------------------------------------------------------

export const getOwnServerSession = async () => {
  const session = await getServerSession(authOptions);

  const isAuthenticated = !!session?.accessToken;
  const isEmailVerified = !!session?.profile?.emailVerifiedAt;

  const isRoled = session?.profile.role.slug;

  const getBearerToken = `Bearer ${session?.accessToken}`;

  const getBearerRefreshToken = `Bearer ${session?.refreshToken}`;

  return {
    session,

    isAuthenticated,
    isEmailVerified,
    isRoled,

    getBearerToken,
    getBearerRefreshToken,
  };
};
