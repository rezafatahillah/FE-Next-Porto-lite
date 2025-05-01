"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IGenderGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useGenderFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IGenderGetAllParams = {
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
