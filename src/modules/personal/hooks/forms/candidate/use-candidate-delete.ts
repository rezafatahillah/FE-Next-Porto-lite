// "use client";

// import { IFeedbackFormProps } from "@/utils/entities";
// import { toast } from "@/templates-ui/components/snackbar";

// import { CandidateQuery } from "../../queries";
// import { ICandidateEntity } from "../../../entities";

// // ----------------------------------------------------------------------

// interface Props extends IFeedbackFormProps {}

// export const useCandidateDelete = (props: Props) => {
//   const { onSuccess, onFailed } = props;

//   const mutation = CandidateQuery.useDelete({});

//   const onSubmit = (id: ICandidateEntity["id"]) => {
//     mutation.mutate(
//       { id },
//       {
//         onSuccess: (data) => {
//           onSuccess?.();

//           toast.success("Successfully deleted candidate!");
//         },
//         onError: (error) => {
//           onFailed?.();

//           toast.error("Failed delete candidate!");
//         },
//       }
//     );
//   };

//   const isLoading = mutation.isPending;

//   return {
//     onSubmit,

//     isLoading,
//   };
// };
