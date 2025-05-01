"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IDoctypeGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useDoctypeFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IDoctypeGetAllParams = {
    q: keyword.query,
  };

  const canReset = isEmptyQuery(queries);

  return {
    keyword,

    canReset,
    queries,
    onReset: resetQueryWithoutPerPage,
  };
};
