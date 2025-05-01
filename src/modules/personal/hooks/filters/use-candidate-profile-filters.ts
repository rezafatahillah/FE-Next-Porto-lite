// "use client";

// import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

// import { ICandidateProfileGetAllParams } from "../../entities";

// // ----------------------------------------------------------------------

// export const useCandidateProfileFilter = () => {
//   const keyword = useDebounceFilterQuery({ name: "q" });

//   const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

//   const queries: ICandidateProfileGetAllParams = {
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
