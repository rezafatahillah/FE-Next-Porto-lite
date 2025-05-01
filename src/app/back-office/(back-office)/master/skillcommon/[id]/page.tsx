import { CONFIG } from "@/config-global";

import { SkillCommonEditView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit SkillCommon | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function SkillCommonEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <SkillCommonEditView id={id} />;
}
