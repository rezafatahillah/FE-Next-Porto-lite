"use client";

import "@/templates-ui/global.css";

import { SessionProvider, SessionProviderProps } from "next-auth/react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/production").then((d) => ({
    default: d.ReactQueryDevtools,
  }))
);

import { CONFIG } from "@/config-global";
import { LanguageValue, LocalizationProvider } from "@/templates-ui/locales";
import { I18nProvider } from "@/templates-ui/locales/i18n-provider";
import { ThemeProvider } from "@/templates-ui/theme/theme-provider";

import { Snackbar } from "@/templates-ui/components/snackbar";
import { ProgressBar } from "@/templates-ui/components/progress-bar";
import { MotionLazy } from "@/templates-ui/components/animate/motion-lazy";
import {
  SettingsDrawer,
  SettingsProvider,
  SettingsState,
} from "@/templates-ui/components/settings";
import { NotificationProvider } from "@/libs/notification";

// ----------------------------------------------------------------------

const queryCache = new QueryCache({
  onSuccess: (data, query) => {
    // console.log('query cache: ', data, query);
  },
});

const mutationCache = new MutationCache({
  onSuccess: (data, variables, context, mutation) => {
    // queryCache.clear();
    // console.log('mutation cache: ', data, variables, context, mutation);
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
  queryCache,
  mutationCache,
});

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  session?: SessionProviderProps["session"];
  lang: LanguageValue;
  settings: SettingsState;
};

export function ProviderLayout(props: Props) {
  const { children, session, lang, settings } = props;

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <I18nProvider lang={CONFIG.isStaticExport ? undefined : lang}>
          <LocalizationProvider>
            <SettingsProvider
              settings={settings}
              caches={CONFIG.isStaticExport ? "localStorage" : "cookie"}
            >
              <NotificationProvider type="mqtt">
                <ThemeProvider>
                  <MotionLazy>
                    <Snackbar />
                    <ProgressBar />
                    <SettingsDrawer
                      hideDirection
                      hideNavLayout
                      hidePresets
                      hideFont
                    />

                    {children}
                  </MotionLazy>
                </ThemeProvider>
              </NotificationProvider>
            </SettingsProvider>
          </LocalizationProvider>
        </I18nProvider>

        <ReactQueryDevtoolsProduction initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
}
