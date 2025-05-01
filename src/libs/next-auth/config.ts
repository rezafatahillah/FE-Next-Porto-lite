import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { CONFIG } from "@/config-global";
import { paths } from "@/utils/routes";
import { AuthApi } from "@/modules/authentication";
import { AxiosError } from "axios";

// ----------------------------------------------------------------------

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: paths.auth.jwt.signIn,
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, _req) => {
        console.log(`authorize credentials: ${JSON.stringify(credentials)}`);

        if (!credentials) return null;

        try {
          const { username, password } = credentials;

          const res = await AuthApi.signIn({
            payload: {
              username,
              password,
            },
          });

          console.log(`authorize api: ${JSON.stringify(res)}`);

          const authenticated = res.data;

          return {
            id: authenticated.profile.id,

            accessToken: authenticated.accessToken,
            accessTokenExpAt: authenticated.accessTokenExpAt,
            refreshToken: authenticated.refreshToken,
            refreshTokenExpAt: authenticated.refreshTokenExpAt,
            abilities: authenticated.abilities,
            profile: authenticated.profile,
          };
        } catch (err) {
          console.log(`authorize error: ${err}`);

          throw new Error(JSON.stringify(err));
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: CONFIG.nextAuth.expiresIn,
  },

  secret: CONFIG.nextAuth.secret,

  callbacks: {
    jwt: async ({ token, user, session, trigger }) => {
      if (trigger === "update") {
        return { ...token, ...session };
      }

      if (Date.now() > token.accessTokenExpAt * 1000) {
        if (!token.refreshToken) throw new TypeError("Missing refreshToken");

        try {
          const { data } = await AuthApi.refresh({
            payload: {
              refreshToken: token.refreshToken,
            },
          });

          token.accessToken = data.accessToken;
          token.accessTokenExpAt = data.accessTokenExpAt;
          token.refreshToken = data.refreshToken;
          token.refreshTokenExpAt = data.refreshTokenExpAt;

          console.log(`refreshed: ${JSON.stringify(data)}`);

          return token;
        } catch (error) {
          if (error instanceof AxiosError) {
            console.error(
              `Error refreshing: ${error.response?.status}, stack trace: ${error}`
            );
          }

          token.error = "RefreshTokenError";
          return token;
        }
      }

      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      return { ...session, ...token };
    },
  },
};
