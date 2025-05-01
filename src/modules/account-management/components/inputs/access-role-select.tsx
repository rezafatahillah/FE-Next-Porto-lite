"use client";

import { Field, RHFAutocompleteProps } from "@/templates-ui/components/hook-form";
import { useAutocompleteSelect } from "@/utils/hooks";

import { AccessRoleQuery } from "../../hooks";
import { IAccessRolesEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props extends Omit<RHFAutocompleteProps, "options"> {
  defaultInput?: Pick<IAccessRolesEntity, "name">;
  onAccessRoleSelect?: (value?: IAccessRolesEntity) => void;
}

export function RHFAccessRoleSelect(props: Props) {
  const { defaultInput, onAccessRoleSelect, onChange, ...other } = props;

  const { openDropdown, helperProps } = useAutocompleteSelect({});

  const { data, isFetching } = AccessRoleQuery.useGetAll({
    props: {},
    options: {
      enabled: openDropdown.value,
    },
  });

  const list = data?.data || [];
  const options = list.map((item) => item.id);

  const label = (value?: Props["defaultInput"]) => value?.name || "Admin";

  return (
    <Field.Autocomplete
      options={options}
      getOptionLabel={(option) => {
        const found = list.find((item) => item.id === option);
        return found ? label(found) : label(defaultInput);
      }}
      isOptionEqualToValue={(option, value) => option === value}
      renderOption={(props, option) => {
        const found = list.find((item) => item.id === option);
        return (
          <li {...props} key={option}>
            {found?.name}
          </li>
        );
      }}
      loading={isFetching}
      {...other}
      {...helperProps}
      onSelect={(newValue) => {
        const found = list.find((item) => item.id === newValue);
        onAccessRoleSelect?.(found);
      }}
    />
  );
}
