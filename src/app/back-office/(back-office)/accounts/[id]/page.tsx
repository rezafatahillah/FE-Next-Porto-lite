import { CONFIG } from "@/config-global";

import { AccountEditView } from "@/modules/account-management";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Account | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: string };
}

export default function AccountEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <AccountEditView id={id} />;
}
