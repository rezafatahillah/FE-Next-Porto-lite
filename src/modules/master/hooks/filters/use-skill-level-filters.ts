"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { ISkillLevelGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useSkillLevelFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: ISkillLevelGetAllParams = {
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
