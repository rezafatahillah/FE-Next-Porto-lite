"use client";

import { Box, Table, TableBody } from "@mui/material";

import { Scrollbar } from "@/templates-ui/components/scrollbar";
import {
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
  TableSelectedAction,
  TableSkeleton,
  useTableParams,
} from "@/templates-ui/components/table";

import { UserTableToolbar } from "./user-table-toolbar";
import { UserTableRow } from "./user-table-row";
import { UserQuery, useUserFilter, useUserDelete } from "../../hooks";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name" },
  { id: "", width: 0 },
];

// ----------------------------------------------------------------------

interface Props {}

export function UserTable(props: Props) {
  const {} = props;

  const { queries } = useUserFilter();

  const table = useTableParams();

  const { data, isFetching, refetch } = UserQuery.useGetAll({
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

  const { onSubmit: onDeleteRow } = useUserDelete({
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <>
      <UserTableToolbar rowCount={rowCount} />

      <Box sx={{ position: "relative" }}>
        <TableSelectedAction
          dense={table.dense}
          numSelected={table.selected.length}
          rowCount={rowCount}
          onSelectAllRows={(checked) =>
            table.onSelectAllRows(
              checked,
              tableData.map((row) => row.id)
            )
          }
        />

        <Scrollbar>
          <Table size={table.dense ? "small" : "medium"} sx={{ minWidth: 960 }}>
            <TableHeadCustom
              headLabel={TABLE_HEAD}
              rowCount={rowCount}
              numSelected={table.selected.length}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
              }
            />

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
                      <UserTableRow
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
