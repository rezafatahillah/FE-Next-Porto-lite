import { CONFIG } from "@/config-global";

import { JobTypeEditView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit JobType | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function JobTypeEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <JobTypeEditView id={id} />;
}
