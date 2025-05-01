"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IOrganizationGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useOrganizationFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IOrganizationGetAllParams = {
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
