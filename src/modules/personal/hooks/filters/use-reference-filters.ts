"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IReferenceGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useReferenceFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IReferenceGetAllParams = {
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
