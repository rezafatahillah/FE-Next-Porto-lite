// "use client";

// import { useDebounceFilterQuery, useFilterQuery } from "@/utils/hooks";

// import { ICandidateIdentityGetAllParams } from "../../entities";

// // ----------------------------------------------------------------------

// export const useCandidateIdentityFilter = () => {
//   const keyword = useDebounceFilterQuery({ name: "q" });

//   const { resetQueryWithoutPerPage, isEmptyQuery } = useFilterQuery();

//   const queries: ICandidateIdentityGetAllParams = {
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
