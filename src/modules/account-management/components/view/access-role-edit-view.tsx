"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { LoadingScreen } from "@/templates-ui/components/loading-screen";

import { ACCESS_ROLE_EDIT_BREADCRUMB } from "../../enums";
import { AccessRoleQuery } from "../../hooks";
import { AccessRoleCreateEditForm } from "../forms";
import { IAccessRoleEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props {
  id: IAccessRoleEntity["id"];
}

export function AccessRoleEditView(props: Props) {
  const { id } = props;

  const { data, isFetching } = AccessRoleQuery.useGetDetails({
    props: {
      id,
    },
  });
  const current = data?.data;

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Edit"
        links={ACCESS_ROLE_EDIT_BREADCRUMB(id, current?.name)}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      {isFetching ? (
        <LoadingScreen />
      ) : (
        <AccessRoleCreateEditForm current={current} />
      )}
    </DashboardContent>
  );
}
