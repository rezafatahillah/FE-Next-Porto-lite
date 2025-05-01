"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { ICandidateGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useCandidateFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: ICandidateGetAllParams = {
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
