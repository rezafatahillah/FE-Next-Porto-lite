'use client';

import { useDebounceFilterQuery, useFilterQuery } from '@/utils/hooks';

import { IAccountGetAllParams } from '../../entities';

// ----------------------------------------------------------------------

export const useAccountFilter = () => {
  const keyword = useDebounceFilterQuery({ name: 'q' });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IAccountGetAllParams = {
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
