"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { ITaxGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useTaxFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: ITaxGetAllParams = {
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
