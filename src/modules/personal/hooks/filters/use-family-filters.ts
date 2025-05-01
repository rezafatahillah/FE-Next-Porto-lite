"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IFamilyGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useFamilyFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IFamilyGetAllParams = {
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
