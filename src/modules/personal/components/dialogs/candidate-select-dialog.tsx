"use client";

import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  InputAdornment,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { SearchNotFound } from "@/templates-ui/components/search-not-found";
import { Iconify } from "@/templates-ui/components/iconify";
import { RouterLink } from "@/templates-ui/routes/components";
import { Scrollbar } from "@/templates-ui/components/scrollbar";
import { LoadingScreen } from "@/templates-ui/components/loading-screen";
import { paths } from "@/utils/routes";
import { useDebouncedState } from "@/utils/hooks";

import { CandidateQuery } from "../../hooks";
import { ICandidateEntity } from "../../entities";

// ----------------------------------------------------------------------

const ITEM_HEIGHT = 64;

// ----------------------------------------------------------------------

interface Props {
  withAccount?: boolean;

  open: boolean;
  onClose: () => void;

  onSelect?: (value: ICandidateEntity) => void;
}

export function CandidateSelectDialog(props: Props) {
  const { open = false, onClose, onSelect } = props;

  const [search, debouncedSearch, setSearch] = useDebouncedState("");

  const { data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage } =
    CandidateQuery.useInfiniteGetAll({
      props: {
        params: {
          q: debouncedSearch,
          account: props.withAccount,
        },
      },
      options: {
        enabled: open,
      },
    });

  const list = data?.pages.map((item) => item.data).flat() || [];
  const notFound = list.length === 0;

  const renderList = (
    <Scrollbar
      onScrollCapture={(event: any) => {
        const { scrollTop, scrollHeight, candidateHeight } = event.target;
        const isScrolledBottom = scrollHeight - scrollTop === candidateHeight;

        if (isScrolledBottom) {
          if (!isFetching && hasNextPage) {
            fetchNextPage();
          }
        }
      }}
      sx={{ height: ITEM_HEIGHT * 6, px: 2.5 }}
    >
      <Box component="ul">
        {list.map((item) => {
          return (
            <Box
              component="li"
              key={`user-${item.id}`}
              sx={{
                gap: 2,
                display: "flex",
                height: ITEM_HEIGHT,
                alignItems: "center",
              }}
            >
              {/* <Avatar src={item.fileid?.url} /> */}

              <ListItemText
                primaryTypographyProps={{
                  typography: "subtitle2",
                  sx: { mb: 0.25 },
                }}
                secondaryTypographyProps={{ typography: "caption" }}
                primary={item.id}
                // secondary={item.}
              />

              <Button size="small" onClick={() => onSelect?.(item)}>
                Select
              </Button>
            </Box>
          );
        })}
      </Box>

      {isFetchingNextPage ? (
        <LoadingScreen sx={{ px: 3, pt: 5, pb: 10 }} />
      ) : null}
    </Scrollbar>
  );

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle sx={{ pb: 0 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">Candidates</Typography>

          <Button
            component={RouterLink}
            href={paths.backOffice.personal.profile.root}
            target="_blank"
            size="small"
            variant="text"
            startIcon={<Iconify icon="solar:add-circle-bold" />}
          >
            New
          </Button>
        </Stack>
      </DialogTitle>

      <Box sx={{ px: 3, py: 2.5 }}>
        <TextField
          fullWidth
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled" }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <DialogContent sx={{ p: 0 }}>
        {isFetching && !isFetchingNextPage ? (
          <LoadingScreen sx={{ px: 3, pt: 5, pb: 10 }} />
        ) : notFound ? (
          <SearchNotFound query={search} sx={{ px: 3, pt: 5, pb: 10 }} />
        ) : (
          renderList
        )}
      </DialogContent>
    </Dialog>
  );
}
