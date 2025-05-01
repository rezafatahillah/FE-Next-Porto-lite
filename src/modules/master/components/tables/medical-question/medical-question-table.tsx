"use client";

import { Box, Table, TableBody, Tooltip, IconButton } from "@mui/material";

import { Scrollbar } from "@/templates-ui/components/scrollbar";
import { Iconify } from '@/templates-ui/components/iconify';
import { useBoolean } from "@/templates-ui/hooks/use-boolean";
import {
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
  TableSelectedAction,
  TableSkeleton,
  useTableParams,
} from "@/templates-ui/components/table";

import { MedicalQuestionTableToolbar } from "./medical-question-table-toolbar";
import { MedicalQuestionTableRow } from "./medical-question-table-row";
import { MedicalQuestionQuery, useMedicalQuestionFilter, useMedicalQuestionDelete } from "../../../hooks";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name" },
  { id: "", label: "Action", width: 0 },
];

// ----------------------------------------------------------------------

interface Props {}

export function MedicalQuestionTable(props: Props) {
  const {} = props;

  const confirm = useBoolean();

  const { queries } = useMedicalQuestionFilter();

  const table = useTableParams();

  const { data, isFetching, refetch } = MedicalQuestionQuery.useGetAll({
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

  const { onSubmit: onDeleteRow } = useMedicalQuestionDelete({
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <>
      <MedicalQuestionTableToolbar rowCount={rowCount} />

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
          action={
            <Tooltip title="Delete">
              <IconButton color="primary" onClick={confirm.onTrue}>
                <Iconify icon="solar:trash-bin-trash-bold" />
              </IconButton>
            </Tooltip>
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
                      <MedicalQuestionTableRow
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
