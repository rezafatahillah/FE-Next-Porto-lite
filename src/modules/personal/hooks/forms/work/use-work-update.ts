
"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";
import { WorkQuery } from "../../queries";
import { WorkUpdateSchema } from "../../../schemes";
import { IWorkEntity } from "../../../entities";

import { useStorageDirectUpload } from "@/modules/core/hooks";
import { endpoints } from "@/libs/axios";
// import { useGetOwnSession } from "../helpers";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: IWorkEntity["id"];
  current?: IWorkEntity;
}

export const useWorkUpdate = (props: Props) => {
  const { id, current, onSuccess } = props;

  const router = useRouter();

  const { activeFile, onUpload } = useStorageDirectUpload({
    endpoint: endpoints.work.getDetails(id),
  });

  const onUploading = (file: File) => {
    onUpload(
      { file: file },
      {
        onSuccess: async (file) => {
          toast.success("Successfully updated work!");

          props.onSuccess?.(file);
        },
      }
    );
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(WorkUpdateSchema),
    defaultValues: {
      companyName: "",
      position: "",
      supervisor: "",
      start: "",
      end: "",
      jobdesk: "",
      reason: "",
      stillWorking: false,
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
      setValue("companyName", current.companyName);
      setValue("position", current.position);
      setValue("supervisor", current.supervisor);
      setValue("start", current.start);
      setValue("end", current.end);
      setValue("salary", current.salary);
      setValue("jobdesk", current.jobdesk);
      setValue("reason", current.reason);
      setValue("stillWorking", current.stillWorking);
      // console.log(current.stillWorking)
    }
  }, [current]);

  const mutation = WorkQuery.useUpdate({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      { id, payload: data },
      {
        onSuccess: (data) => {
          onSuccess?.();
router.push(paths.backOffice.personal.work.root);
          toast.success("Successfully updated work!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed update work!",
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
    onSubmit,

    isLoading,
  };
};
