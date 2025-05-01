"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IJobFieldGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useJobFieldFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IJobFieldGetAllParams = {
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
