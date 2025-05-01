"use client";

import {
  Button,
  IconButton,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
  Card,
  Typography,
  Box,
  Grid,
  Divider,
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

import { ISkillEntity } from "../../../entities";
import { fDate } from "@/templates-ui/utils/format-time";

// ----------------------------------------------------------------------

interface Props {
  row: ISkillEntity;
  selected?: boolean;
  onSelectRow?: VoidFunction;
  onDeleteRow: VoidFunction;
}

export function SkillTableRow(props: Props) {
  const { row, selected, onSelectRow, onDeleteRow } = props;

  const { id, skillCommonId, skillLevel } = row;

  const confirm = useBoolean();

  const popover = usePopover();

  const router = useRouter();

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <IconButton
            onClick={popover.onOpen}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>

          <Stack sx={{ p: 3, pb: 2 }}>
            {/* Iconify dan List Item */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 2 }}
            >
              <Iconify
                icon="arcticons:brainf"
                width={48}
                height={48}
                sx={{
                  color: "primary.main",
                }}
              />
              <ListItemText
                primary={skillCommonId.name}
                secondary= {skillLevel.name}
                primaryTypographyProps={{ typography: "subtitle1" }}
                secondaryTypographyProps={{
                  mt: 1,
                  component: "span",
                  typography: "caption",
                  color: "text.disabled",
                }}
              />
            </Stack>
          </Stack>

          <Divider sx={{ borderStyle: "dashed" }} />

          
        </Card>

        <CustomPopover
          open={popover.open}
          anchorEl={popover.anchorEl}
          onClose={popover.onClose}
          slotProps={{ arrow: { placement: "right-top" } }}
        >
          <MenuList>
            <MenuItem
              onClick={() => {
                router.push(paths.backOffice.personal.skill.edit(id));
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
      </Grid>
    </>
  );
}
