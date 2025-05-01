"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { Scrollbar } from "@/templates-ui/components/scrollbar";
import { ReferenceTableToolbar } from "./reference-table-toolbar";
import { ReferenceTableRow } from "./reference-table-row";
import { ReferenceQuery, useReferenceFilter, useReferenceDelete } from "../../../hooks";

import {
  TableNoData,
  TablePaginationCustom,
  useTableParams,
} from "@/templates-ui/components/table";

// ----------------------------------------------------------------------

interface Props {}

export function ReferenceTable(props: Props) {
  const {} = props;

  const { queries } = useReferenceFilter();
  const table = useTableParams();

  const { data, isFetching, refetch } = ReferenceQuery.useGetAll({
    props: {
      params: {
        ...queries,
        ...table.params,
      },
    },
  });

  const tableData = data?.data || [];
  const rowCount = data?.meta.totalCount || 0;
  const isLoading = isFetching || false;
  const isEmpty = rowCount === 0;

  const { onSubmit: onDeleteRow } = useReferenceDelete({
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <>
      <ReferenceTableToolbar rowCount={rowCount} />

      <Box sx={{ position: "relative" }}>
        <Scrollbar>
          <Grid container spacing={3}>
            {isLoading ? (
              [...Array(3)].map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="body2">Loading...</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <>
                {tableData.map((row) => {
                  return (
                    <ReferenceTableRow
                      key={row.id}
                      row={row}
                      selected={table.selected.includes(row.id)}
                      onSelectRow={() => table.onSelectRow(row.id)}
                      onDeleteRow={() => onDeleteRow(row.id)}
                    />
                  );
                })}

                <TableNoData notFound={isEmpty} />
              </>
            )}
          </Grid>
        </Scrollbar>
      </Box>
      <TablePaginationCustom
        count={rowCount}
        page={table.page}
        dense={table.dense}
        rowsPerPage={table.rowsPerPage}
        onPageChange={table.onChangePage}
        onChangeDense={table.onChangeDense}
        onRowsPerPageChange={table.onChangeRowsPerPage}
      />
    </>
  );
}
