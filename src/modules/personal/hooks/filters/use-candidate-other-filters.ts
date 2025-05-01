// "use client";

// import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

// import { ICandidateOtherGetAllParams } from "../../entities";

// // ----------------------------------------------------------------------

// export const useCandidateOtherFilter = () => {
//   const keyword = useDebounceFilterQuery({ name: "q" });

//   const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

//   const queries: ICandidateOtherGetAllParams = {
//     q: keyword.query,
//   };

//   const canReset = isEmptyQuery(queries);

//   return {
//     keyword,

//     canReset,
//     queries,
//     onReset: resetQueryWithoutPerPage,
//   };
// };
