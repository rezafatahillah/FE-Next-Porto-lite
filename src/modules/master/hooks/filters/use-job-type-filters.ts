"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IJobTypeGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useJobTypeFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IJobTypeGetAllParams = {
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
