import { parseAsInteger, useQueryStates } from "nuqs";
import { useRouter, usePathname } from "next/navigation";

import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_ROWS_PER_PAGE,
} from "@/templates-ui/components/table";
import { isEmpty } from "lodash";

// ----------------------------------------------------------------------

export function useFilterQuery() {
  const router = useRouter();
  const pathname = usePathname();

  const [pagination, setPagination] = useQueryStates({
    page: parseAsInteger.withDefault(DEFAULT_CURRENT_PAGE),
    perPage: parseAsInteger.withDefault(DEFAULT_ROWS_PER_PAGE),
  });

  const resetPagination = () => {
    setPagination({
      page: DEFAULT_CURRENT_PAGE,
      perPage: DEFAULT_ROWS_PER_PAGE,
    });
  };

  const resetQueryWithoutPerPage = () => {
    const { perPage } = pagination;

    const params = new URLSearchParams();
    params.set("perPage", String(perPage));

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  const resetAllQuery = () => {
    router.replace(pathname, {
      scroll: false,
    });
  };

  const isEmptyQuery = (queries: object) =>
    Object.values(queries)
      .map((value) => !isEmpty(value))
      .includes(true);

  return {
    resetPagination,
    resetQueryWithoutPerPage,
    resetAllQuery,
    isEmptyQuery,
  };
}
