import { CONFIG } from "@/config-global";

import { SkillEditView } from "@/modules/personal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Edit Skill | Back Office - ${CONFIG.site.name}`,
};

interface Props {
  params: { id: number };
}

export default function SkillEditPage(props: Props) {
  const {
    params: { id },
  } = props;

  return <SkillEditView id={id} />;
}
