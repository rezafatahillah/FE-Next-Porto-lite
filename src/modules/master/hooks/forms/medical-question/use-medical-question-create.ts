"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";
import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { MedicalQuestionQuery } from "../../queries";
import { MedicalQuestionCreateSchema } from "../../../schemes";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useMedicalQuestionCreate = (props: Props) => {
  const {} = props;

  const router = useRouter();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(MedicalQuestionCreateSchema),
    defaultValues: {
      name: "",

    },
  });

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    watch,
    setError,
  } = methods;

  // ----------------------------------------------------------------------

  const mutation = MedicalQuestionQuery.useCreate({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      { payload: data },
      {
        onSuccess: (data) => {
          router.push(paths.backOffice.master.medicalquestion.root);

          toast.success("Successfully create medical question!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed create medical question!",
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
