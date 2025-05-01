"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { MedicalQuestionQuery } from "../../queries";
import { MedicalQuestionUpdateSchema } from "../../../schemes";
import { IMedicalQuestionEntity } from "../../../entities";

import { useStorageDirectUpload } from "@/modules/core/hooks";
import { endpoints } from "@/libs/axios";
// import { useGetOwnSession } from "../helpers";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: IMedicalQuestionEntity["id"];
  current?: IMedicalQuestionEntity;
}

export const useMedicalQuestionUpdate = (props: Props) => {
  const { id, current, onSuccess } = props;

  const { activeFile, onUpload } = useStorageDirectUpload({
    endpoint: endpoints.medicalquestion.getDetails(id),
  });

  const onUploading = (file: File) => {
    onUpload(
      { file: file },
      {
        onSuccess: async (file) => {
          toast.success("Successfully updated medical question!");

          props.onSuccess?.(file);
        },
      }
    );
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(MedicalQuestionUpdateSchema),
    defaultValues: {
      name: "",
      groupId: undefined,
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setValue,
    setError,
  } = methods;

  useEffect(() => {
    if (current) {
      console.log(current)
      setValue("name", current.name);
    }
  }, [current]);

  const mutation = MedicalQuestionQuery.useUpdate({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      { id, payload: data },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully updated medicalquestion!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed update medicalquestion!",
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
    activeFile,

    onUploading,

    methods,
    onSubmit,

    isLoading,
  };
};
