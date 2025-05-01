"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { ReferenceQuery } from "../../queries";
import { ReferenceUpdateSchema } from "../../../schemes";
import { IReferenceEntity } from "../../../entities";

import { useStorageDirectUpload } from "@/modules/core/hooks";
import { endpoints } from "@/libs/axios";
// import { useGetOwnSession } from "../helpers";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: IReferenceEntity["id"];
  current?: IReferenceEntity;
}

export const useReferenceUpdate = (props: Props) => {
  const { id, current, onSuccess } = props;

  const { activeFile, onUpload } = useStorageDirectUpload({
    endpoint: endpoints.reference.getDetails(id),
  });

  const onUploading = (file: File) => {
    onUpload(
      { file: file },
      {
        onSuccess: async (file) => {
          toast.success("Successfully updated reference!");

          props.onSuccess?.(file);
        },
      }
    );
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(ReferenceUpdateSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      position: "",
      relation: "",
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
      setValue("address", current.address);
      setValue("phone", current.phone);
      setValue("position", current.position);
      setValue("relation", current.relation);
    }
  }, [current]);

  const mutation = ReferenceQuery.useUpdate({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      { id, payload: data },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully updated reference!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed update reference!",
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
