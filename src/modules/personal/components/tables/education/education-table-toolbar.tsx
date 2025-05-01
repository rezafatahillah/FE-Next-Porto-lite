"use client";

import { Chip, InputAdornment, Stack, TextField } from "@mui/material";

import { Iconify } from "@/templates-ui/components/iconify";
import {
  chipProps,
  FiltersBlock,
  FiltersResult,
} from "@/templates-ui/components/filters-result";

import { useEducationFilter } from "../../../hooks";

// ----------------------------------------------------------------------

type Props = {
  rowCount: number;
};

export function EducationTableToolbar(props: Props) {
  const { rowCount } = props;

  const { keyword, canReset, onReset } = useEducationFilter();

  return (
    <>
      <Stack
        spacing={2}
        alignItems={{ xs: "flex-end", md: "center" }}
        direction={{ xs: "column", md: "row" }}
        sx={{ p: 2.5 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          flexGrow={1}
          sx={{ width: 1 }}
        >
          <TextField
            fullWidth
            value={keyword.value}
            onChange={(event) => keyword.setValue(event.target.value)}
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
        </Stack>
      </Stack>

      {canReset ? (
        <FiltersResult
          totalResults={rowCount}
          onReset={onReset}
          sx={{ p: 2.5, pt: 0 }}
        >
          <FiltersBlock label="Keyword:" isShow={!!keyword.query}>
            <Chip
              {...chipProps}
              label={keyword.query}
              onDelete={keyword.removeValue}
            />
          </FiltersBlock>
        </FiltersResult>
      ) : null}
    </>
  );
}
