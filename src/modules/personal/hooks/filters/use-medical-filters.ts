"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IMedicalGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useMedicalFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IMedicalGetAllParams = {
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
