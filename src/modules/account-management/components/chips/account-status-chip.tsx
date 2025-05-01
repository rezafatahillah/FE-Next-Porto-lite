"use client";

import { Label } from "@/templates-ui/components/label";

import { AccountStatusCodeEnum } from "@/modules/core";

// ----------------------------------------------------------------------

interface Props {
  status: AccountStatusCodeEnum;
}

export function AccountStatusChip(props: Props) {
  const { status } = props;

  const isEnabled = status === AccountStatusCodeEnum.Enable;

  return (
    <>
      <Label color={isEnabled ? "success" : "error"} variant="soft">
        {isEnabled ? "Active" : "Inactive"}
      </Label>
    </>
  );
}
