"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IDegreeGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useDegreeFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IDegreeGetAllParams = {
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
