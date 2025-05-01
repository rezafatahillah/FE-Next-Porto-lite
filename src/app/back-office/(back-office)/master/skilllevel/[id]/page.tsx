import { CONFIG } from "@/config-global";

import { SkillLevelEditView } from "@/modules/master";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit SkillLevel | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function SkillLevelEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <SkillLevelEditView id={id} />;
}
