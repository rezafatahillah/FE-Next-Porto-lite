"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { ISkillGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useSkillFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: ISkillGetAllParams = {
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
