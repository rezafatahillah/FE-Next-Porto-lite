import { CONFIG } from "@/config-global";

import { UserEditView } from "@/modules/human-resource";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit User | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: string };
}

export default function UserEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <UserEditView id={id} />;
}
