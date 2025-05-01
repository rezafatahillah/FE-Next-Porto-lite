"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { ISkillCommonGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useSkillCommonFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: ISkillCommonGetAllParams = {
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
