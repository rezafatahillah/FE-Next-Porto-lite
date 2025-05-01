"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IReligionGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useReligionFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IReligionGetAllParams = {
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
