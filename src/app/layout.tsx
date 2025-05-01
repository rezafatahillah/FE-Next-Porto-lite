import type { Metadata, Viewport } from "next";

import { CONFIG } from "@/config-global";

import { detectLanguage } from "@/templates-ui/locales/server";
import { detectSettings } from "@/templates-ui/components/settings/server";
import { defaultSettings } from "@/templates-ui/components/settings";
import { getInitColorSchemeScript } from "@/templates-ui/theme/color-scheme-script";
import { primary } from "@/templates-ui/theme/core/palette";

import { ProviderLayout } from "@/components";

// ----------------------------------------------------------------------

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: primary.main,
};

export const metadata: Metadata = {
  title: CONFIG.site.name,
  icons: {
    icon: "/logo/logo-full.png",
  },
};

// ----------------------------------------------------------------------

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout(props: Props) {
  const {} = props;

  const lang = CONFIG.isStaticExport ? "en" : await detectLanguage();

  const settings = CONFIG.isStaticExport
    ? defaultSettings
    : await detectSettings();

  return (
    <html lang={lang ?? "en"} suppressHydrationWarning>
      <body>
        {getInitColorSchemeScript}

        <ProviderLayout lang={lang} settings={settings} {...props} />
      </body>
    </html>
  );
}
