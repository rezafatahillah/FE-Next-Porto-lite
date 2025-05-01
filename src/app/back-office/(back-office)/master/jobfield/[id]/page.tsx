import { CONFIG } from "@/config-global";

import { JobFieldEditView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit JobField | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function JobFieldEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <JobFieldEditView id={id} />;
}
