"use client";

import { useState, useEffect, useCallback } from "react";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import debounce from "lodash/debounce";

import { DEFAULT_CURRENT_PAGE } from "@/templates-ui/components/table";

// ----------------------------------------------------------------------

interface Props {
  name: string;
  initialQuery?: string;
  delay?: number;
}

export function useDebounceFilterQuery(props: Props) {
  const { name, initialQuery = "", delay = 500 } = props;

  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(DEFAULT_CURRENT_PAGE)
  );

  const [query, setQuery] = useQueryState(
    name,
    parseAsString.withDefault(initialQuery).withOptions({
      shallow: false,
    })
  );
  const [filter, setFilter] = useState(query);

  // Create a debounced function for setting the query state
  const debouncedSetQuery = useCallback(
    debounce((newQuery) => {
      setQuery(newQuery);
      setPage(DEFAULT_CURRENT_PAGE);
    }, delay),
    [setQuery, delay]
  );

  useEffect(() => {
    // Update the filter state when the query state changes
    setFilter(query);
  }, [query]);

  const handleFilterChange = (newValue: string) => {
    setFilter(newValue);
    debouncedSetQuery(newValue);
  };

  const handleRemove = () => {
    setFilter("");
    debouncedSetQuery("");
  };

  return {
    value: filter,
    query,
    setValue: handleFilterChange,
    removeValue: handleRemove,
  };
}
