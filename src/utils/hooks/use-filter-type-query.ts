import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryState, useQueryStates } from 'nuqs';
import { useRouter, usePathname } from 'next/navigation';

// ----------------------------------------------------------------------

interface FilterParams {
  filterType: string[];
  filterBy: string[];
}

interface Props {}

export function useFilterTypeQuery(props: Props) {
  const {} = props;

  const [filterType, setFilterType] = useQueryState('filterType[]', parseAsArrayOf(parseAsString));

  const [filterBy, setFilterBy] = useQueryState('filterBy[]', parseAsArrayOf(parseAsString));

  const [name, setName] = useQueryState('filterType', parseAsArrayOf(parseAsString));

  console.log('filterType ', filterType);
  console.log('name ', name);

  // const [filterType, setFilterType] = useQueryState<string[]>('filterType', {
  //   parse: value => value.split(','),
  //   serialize: value => value.join(','),
  //   defaultValue: [],
  // });

  // const [filterBy, setFilterBy] = useQueryState<string[]>('filterBy', {
  //   parse: value => value.split(','),
  //   serialize: value => value.join(','),
  //   defaultValue: [],
  // });

  // const setFilters = (filters: Partial<FilterParams>) => {
  //   if (filters.filterType !== undefined) {
  //     setFilterType(filters.filterType);
  //   }
  //   if (filters.filterBy !== undefined) {
  //     setFilterBy(filters.filterBy);
  //   }
  // };

  // const getFilterAtIndex = (filterName: keyof FilterParams, index: number): string | undefined => {
  //   const filter = filterName === 'filterType' ? filterType : filterBy;
  //   return filter[index];
  // };

  // const setFilterAtIndex = (filterName: keyof FilterParams, index: number, value: string) => {
  //   const currentFilter = filterName === 'filterType' ? filterType : filterBy;
  //   const newFilter = [...currentFilter];
  //   newFilter[index] = value;
  //   if (filterName === 'filterType') {
  //     setFilterType(newFilter);
  //   } else {
  //     setFilterBy(newFilter);
  //   }
  // };

  return {
    filters: {
      // filterType,
      // filterBy,
    },
    // setFilters,
    // getFilterAtIndex,
    // setFilterAtIndex,
  };
}
