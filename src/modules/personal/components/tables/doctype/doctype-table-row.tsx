"use client";

import {
  Avatar,
  Button,
  Checkbox,
  IconButton,
  ListItemText,
  MenuItem,
  MenuList,
  TableCell,
  TableRow,
  Stack,
  Card,
  CardContent,
  Typography,
  Box,
  Tooltip,
  Grid,
  Divider,
  Link,
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

import { IDoctypeEntity } from "../../../entities";
import { fDate } from "@/templates-ui/utils/format-time";

// ----------------------------------------------------------------------

interface Props {
  row: IDoctypeEntity;
  selected?: boolean;
  onSelectRow?: VoidFunction;
  onDeleteRow: VoidFunction;
}

export function DoctypeTableRow(props: Props) {
  const { row, selected, onSelectRow, onDeleteRow } = props;

  const { id, name, required, group, active, fileId } = row;

  const confirm = useBoolean();

  const popover = usePopover();

  const router = useRouter();

  // console.log(fileId?.url);

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
                icon="eva:file-text-fill"
                width={48}
                height={48}
                sx={{
                  color: "primary.main",
                }}
              />
              <ListItemText
                primary={name}
                secondary="Additional information here"
                primaryTypographyProps={{ typography: "subtitle1" }}
                secondaryTypographyProps={{
                  mt: 1,
                  component: "span",
                  typography: "caption",
                  color: "text.disabled",
                }}
              />
            </Stack>

            {/* Stack Kedua di bawah List Item */}
            {/* <Stack
              spacing={0.5}
              direction="row"
              alignItems="center"
              sx={{ color: "primary.main", typography: "caption" }}
            >
              <Iconify width={16} icon="solar:users-group-rounded-bold" />
              {"ddd"}
              {group}
            </Stack> */}
          </Stack>

          <Divider sx={{ borderStyle: "dashed" }} />

          {fileId?.url && (
            <Box sx={{ p: 3 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => window.open(fileId.url, "_blank")}
              >
                Preview File
              </Button>
            </Box>
          )}

          <Box
            rowGap={1}
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            sx={{ p: 3 }}
          >
            {[
              {
                label: fileId?.name,
                icon: (
                  <Iconify
                    width={16}
                    icon="solar:link-linear"
                    sx={{ flexShrink: 0 }}
                  />
                ),
              },
              {
                label: fileId?.size,
                icon: (
                  <Iconify
                    width={16}
                    icon="ix:disk-filled"
                    sx={{ flexShrink: 0 }}
                  />
                ),
              },
              {
                label: fileId?.extension,
                icon: (
                  <Iconify
                    width={16}
                    icon="fluent-mdl2:document-set"
                    sx={{ flexShrink: 0 }}
                  />
                ),
              },
              {
                label: fDate(fileId?.createdAt),
                icon: (
                  <Iconify
                    width={16}
                    icon="solar:clock-circle-bold"
                    sx={{ flexShrink: 0 }}
                  />
                ),
              },
            ].map((item, index) => (
              <Stack
                // key={item.label}
                key={`${fileId?.id || index}-${item.label}`}
                spacing={0.5}
                flexShrink={0}
                direction="row"
                alignItems="center"
                sx={{ color: "text.disabled", minWidth: 0 }}
              >
                {item.icon}
                <Typography variant="caption" noWrap>
                  {item.label}
                </Typography>
              </Stack>
            ))}
          </Box>
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
                router.push(paths.backOffice.personal.doctype.edit(id));
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
