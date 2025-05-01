"use client";

import { UIEvent, useCallback, useEffect, useState } from "react";

import { useBoolean } from "@/templates-ui/hooks/use-boolean";

import { useDebouncedState } from "./use-debounce-state";
import { IDefaultParams } from "../entities";

// ----------------------------------------------------------------------

interface Props<Entity> {
  useSearching?: boolean;
  fetchNextPage?: () => void;
}

export function useAutocompleteSelect<Entity>(props: Props<Entity>) {
  const { useSearching = false, fetchNextPage } = props;

  // ----------------------------------------------------------------------

  const openDropdown = useBoolean();
  const initOpenDropdown = useBoolean();
  const [search, debouncedSearch, setSearch] = useDebouncedState("");
  const [selectedValue, setSelectedValue] = useState<Entity>();

  // ----------------------------------------------------------------------

  const searchProps = useSearching
    ? {
        onInputChange: (
          _: React.SyntheticEvent,
          value: string,
          reason: string
        ) => {
          if (reason === "input") {
            setSearch(value);
          }
        },
      }
    : {};

  // ----------------------------------------------------------------------

  const onOpen = () => {
    openDropdown.onTrue();
    initOpenDropdown.onTrue();
  };

  const onClose = () => {
    openDropdown.onFalse();
    initOpenDropdown.onFalse();
  };

  useEffect(() => {
    initOpenDropdown.onFalse();
  }, [search]);

  const dropdownProps = { onOpen, onClose };

  // ----------------------------------------------------------------------

  const handleSelect = (value?: Entity) => {
    setSelectedValue(value);
  };

  // ----------------------------------------------------------------------

  const useNextPage = !!fetchNextPage;

  const handleDetectBottomScroll = useCallback(
    (event: UIEvent<HTMLUListElement, globalThis.UIEvent>) => {
      const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
      const isBottom = scrollHeight - scrollTop <= clientHeight + 1;

      if (isBottom) {
        fetchNextPage?.();
      }
    },
    [fetchNextPage]
  );

  const infiniteScrollProps = useNextPage
    ? {
        ListboxProps: {
          onScroll: handleDetectBottomScroll,
        },
      }
    : {};

  // ----------------------------------------------------------------------

  const queryParams: IDefaultParams = {
    q: useSearching
      ? initOpenDropdown.value
        ? ""
        : debouncedSearch
      : undefined,
    perPage: 20,
  };

  return {
    selectedValue: {
      value: selectedValue,
      onChange: setSelectedValue,
    },
    handleSelect,

    queryParams,

    search: {
      value: search,
      debouncedValue: debouncedSearch,
      onChange: setSearch,
    },

    openDropdown,

    helperProps: {
      ...dropdownProps,
      ...infiniteScrollProps,
      ...searchProps,
    },
  };
}
