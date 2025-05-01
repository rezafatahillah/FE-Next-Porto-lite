'use client';

import { useDebounceFilterQuery, useFilterQuery } from '@/utils/hooks';

import { IAccessRoleGetAllParams } from '../../entities';

// ----------------------------------------------------------------------

export const useAccessRoleFilter = () => {
  const keyword = useDebounceFilterQuery({ name: 'q' });

  const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

  const queries: IAccessRoleGetAllParams = {
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
