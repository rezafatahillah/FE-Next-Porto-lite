"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";
import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";

import { MedicalQuery } from "../../queries";
import { MedicalUpdateSchema, MedicalUpdateMultipleSchema } from "../../../schemes";

// ----------------------------------------------------------------------

export const useMedicalUpdate = () => {
  const router = useRouter();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(MedicalUpdateMultipleSchema),
    defaultValues: {
      medicals: [],
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setError,
  } = methods;

  // ----------------------------------------------------------------------

  const mutation = MedicalQuery.useUpdateMultiple({}); 

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    console.log("Data sebelum mutate:", data);
    
    mutation.mutate(
      {  payload: data },
      {
        onSuccess: () => {
          router.push(paths.backOffice.personal.medical.root); 

          toast.success("Successfully Updated medical records!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to Update medical records!",
          });

          toast.error(message);

          fields.forEach((item) => {
            setError(item.field, {
              message: item.message,
            });
          });
        },
      }
    );
  });

  return {
    methods,
    isLoading,
    onSubmit,
  };
};


