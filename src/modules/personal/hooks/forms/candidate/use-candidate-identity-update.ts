"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { CandidateQuery } from "../../queries";
import { CandidateIdentityUpdateSchema } from "../../../schemes";
import { ICandidateEntity } from "../../../entities";

import { useStorageDirectUpload } from "@/modules/core/hooks";
import { endpoints } from "@/libs/axios";
// import { useGetOwnSession } from "../helpers";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: ICandidateEntity["id"];
  current?: ICandidateEntity;
}

export const useCandidateIdentityUpdate = (props: Props) => {
  const { id, current, onSuccess } = props;

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(CandidateIdentityUpdateSchema),
    defaultValues: {
      ktp: "",
      kk: "",
      paspor: "",
      simA: "",
      simB: "",
      simC: "",
      bpjsKesehatan: "",
      bpjsKetenagakerjaan: "",
      npwp: "",
      statusPtkp: "",
      bankName: "",
      accountNo: "",
      accountName: "",
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
      setValue("ktp", current.ktp);
      setValue("kk", current.kk);
      setValue("paspor", current.paspor);
      setValue("simA", current.simA);
      setValue("simB", current.simB);
      setValue("simC", current.simC);
      setValue("bpjsKesehatan", current.bpjsKesehatan);
      setValue("bpjsKetenagakerjaan", current.bpjsKetenagakerjaan);
      setValue("npwp", current.npwp);
      setValue("statusPtkp", current.statusPtkp);
      setValue("bankName", current.bankName);
      setValue("accountNo", current.accountNo);
      setValue("accountName", current.accountName);
    }
  }, [current]);

  const mutation = CandidateQuery.useUpdateIdentity({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      { id, payload: data },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully updated candidate!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed update candidate!",
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
