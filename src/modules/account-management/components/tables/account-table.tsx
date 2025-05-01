"use client";

import { Box, Table, TableBody } from "@mui/material";

import { Scrollbar } from "@/templates-ui/components/scrollbar";
import {
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
  TableSkeleton,
  useTableParams,
} from "@/templates-ui/components/table";

import { AccountTableToolbar } from "./account-table-toolbar";
import { AccountTableRow } from "./account-table-row";
import { AccountQuery, useAccountFilter, useAccountDelete } from "../../hooks";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name" },
  { id: "username", label: "Username" },
  { id: "role", label: "Role" },
  { id: "status", label: "Status" },
  { id: "", width: 0 },
];

// ----------------------------------------------------------------------

interface Props {}

export function AccountTable(props: Props) {
  const {} = props;

  const { queries } = useAccountFilter();

  const table = useTableParams();

  const { data, isFetching, refetch } = AccountQuery.useGetAll({
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

  const { onSubmit: onDeleteRow } = useAccountDelete({
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <>
      <AccountTableToolbar rowCount={rowCount} />

      <Box sx={{ position: "relative" }}>
        <Scrollbar>
          <Table size={table.dense ? "small" : "medium"} sx={{ minWidth: 960 }}>
            <TableHeadCustom headLabel={TABLE_HEAD} rowCount={rowCount} />

            <TableBody>
              {isLoading ? (
                [...Array(3)].map((i, index) => (
                  <TableSkeleton
                    key={index}
                    sx={{ height: table.denseHeight }}
                  />
                ))
              ) : (
                <>
                  {tableData.map((row) => {
                    return (
                      <AccountTableRow
                        key={row.id}
                        row={row}
                        onDeleteRow={() => onDeleteRow(row.id)}
                      />
                    );
                  })}

                  <TableNoData notFound={isEmpty} />
                </>
              )}
            </TableBody>
          </Table>
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
