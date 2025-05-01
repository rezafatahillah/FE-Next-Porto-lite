"use client";

import { Box, Table, TableBody } from "@mui/material";

import { Scrollbar } from "@/templates-ui/components/scrollbar";
import {
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
  TableSelectedAction,
  TableSkeleton,
  useTable,
} from "@/templates-ui/components/table";

import { AccessRoleTableToolbar } from "./access-role-table-toolbar";
import { AccessRoleTableRow } from "./access-role-table-row";
import {
  AccessRoleQuery,
  useAccessRoleFilter,
  useAccessRoleDelete,
} from "../../hooks";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name" },
  { id: "", width: 0 },
];

// ----------------------------------------------------------------------

interface Props {}

export function AccessRoleTable(props: Props) {
  const {} = props;

  const { queries } = useAccessRoleFilter();

  const table = useTable();

  const { data, isFetching, refetch } = AccessRoleQuery.useGetAll({
    props: {
      params: {
        ...queries,
      },
    },
  });

  const tableData = data?.data || [];
  const rowCount = tableData.length || 0;
  const isLoading = isFetching || false;
  const isEmpty = rowCount === 0;

  const { onSubmit: onDeleteRow } = useAccessRoleDelete({
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <>
      <AccessRoleTableToolbar rowCount={rowCount} />

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
                      <AccessRoleTableRow
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
