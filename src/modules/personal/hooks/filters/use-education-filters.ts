"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IEducationGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useEducationFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IEducationGetAllParams = {
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
