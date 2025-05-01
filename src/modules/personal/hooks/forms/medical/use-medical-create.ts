"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";
import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";

import { MedicalQuery } from "../../queries";
import { MedicalCreateSchema, MedicalCreateMultipleSchema } from "../../../schemes";

// ----------------------------------------------------------------------

export const useMedicalCreate = () => {
  const router = useRouter();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(MedicalCreateMultipleSchema),
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

  const mutation = MedicalQuery.useCreateMultiple({}); 

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      { payload: data },
      {
        onSuccess: () => {
          router.push(paths.backOffice.personal.skill.root); 

          toast.success("Successfully created medical records!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to create medical records!",
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
