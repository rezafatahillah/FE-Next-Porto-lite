"use client";

import {
  Avatar,
  Button,
  Checkbox,
  IconButton,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
  TableCell,
  TableRow,
} from "@mui/material";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";
import {
  CustomPopover,
  usePopover,
} from "@/templates-ui/components/custom-popover";
import { Iconify } from "@/templates-ui/components/iconify";
import { useBoolean } from "@/templates-ui/hooks/use-boolean";
import { ConfirmDialog } from "@/templates-ui/components/custom-dialog";

import { IAccountEntity } from "../../entities";
import { AccountStatusChip } from "../chips";

// ----------------------------------------------------------------------

interface Props {
  row: IAccountEntity;
  onDeleteRow: VoidFunction;
}

export function AccountTableRow(props: Props) {
  const { row, onDeleteRow } = props;

  const { id, name, username, role, status } = row;

  const confirm = useBoolean();

  const popover = usePopover();

  const router = useRouter();

  return (
    <>
      <TableRow hover>
        <TableCell>{name}</TableCell>

        <TableCell>{username}</TableCell>

        <TableCell>{role.name}</TableCell>

        <TableCell>
          <AccountStatusChip status={status} />
        </TableCell>

        <TableCell>
          <IconButton
            color={popover.open ? "inherit" : "default"}
            onClick={popover.onOpen}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: "right-top" } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              router.push(paths.backOffice.accounts.edit(id));
              popover.onClose();
            }}
          >
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>

          <MenuItem
            onClick={() => {
              confirm.onTrue();
              popover.onClose();
            }}
            sx={{ color: "error.main" }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </CustomPopover>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
    </>
  );
}
