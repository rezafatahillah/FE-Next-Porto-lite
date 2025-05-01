"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IDiseaseGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useDiseaseFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IDiseaseGetAllParams = {
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
