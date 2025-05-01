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

import { IEducationEntity } from "../../../entities";
import { fDate } from "@/templates-ui/utils/format-time";

// ----------------------------------------------------------------------

interface Props {
  row: IEducationEntity;
  selected?: boolean;
  onSelectRow?: VoidFunction;
  onDeleteRow: VoidFunction;
}

export function EducationTableRow(props: Props) {
  const { row, selected, onSelectRow, onDeleteRow } = props;

  const { id, education, name, city, status, study, yearStart, yearEnd  } = row;

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
                icon="map:university"
                width={48}
                height={48}
                sx={{
                  color: "primary.main",
                }}
              />
              <ListItemText
                primary={name}
                secondary= {education.name}
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

          <Box
            rowGap={1.5}
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            sx={{ p: 3 }}
          >
            {[
              {
                label: yearStart,
                icon: (
                  <Iconify
                    width={16}
                    icon="guidance:calendar"
                    sx={{ flexShrink: 0 }}
                  />
                ),
              },
              {
                label: yearEnd,
                icon: (
                  <Iconify
                    width={16}
                    icon="guidance:calendar"
                    sx={{ flexShrink: 0 }}
                  />
                ),
              },
              {
                label: city,
                icon: (
                  <Iconify
                    width={16}
                    icon="mingcute:location-3-fill"
                    sx={{ flexShrink: 0 }}
                  />
                ),
              },
              {
                label: study,
                icon: (
                  <Iconify
                    width={16}
                    icon="map:school"
                    sx={{ flexShrink: 0 }}
                  />
                ),
              },
            ].map((item) => (
              <Stack
                key={item.label}
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
          {/* <MenuList>
            <MenuItem
              onClick={() => {
                router.push(paths.backOffice.personal.education.edit(id));
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
          </MenuList> */}
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
