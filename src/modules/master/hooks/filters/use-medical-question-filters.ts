"use client";

import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

import { IMedicalQuestionGetAllParams } from "../../entities";

// ----------------------------------------------------------------------

export const useMedicalQuestionFilter = () => {
  const keyword = useDebounceFilterQuery({ name: "q" });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IMedicalQuestionGetAllParams = {
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
