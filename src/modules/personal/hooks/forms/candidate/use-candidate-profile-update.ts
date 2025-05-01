"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { CandidateQuery } from "../../queries";
import { CandidateProfileUpdateSchema } from "../../../schemes";
import { ICandidateEntity } from "../../../entities";

import { useStorageDirectUpload } from "@/modules/core/hooks";
import { endpoints } from "@/libs/axios";
// import { useGetOwnSession } from "../helpers";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: ICandidateEntity["id"];
  current?: ICandidateEntity;
}

export const useCandidateProfileUpdate = (props: Props) => {
  const { id, current, onSuccess } = props;

  const { activeFile, onUpload } = useStorageDirectUpload({
    endpoint: endpoints.candidate.getDetails(id),
  });

  const onUploading = (file: File) => {
    onUpload(
      { file: file },
      {
        onSuccess: async (file) => {
          toast.success("Successfully updated candidate!");

          props.onSuccess?.(file);
        },
      }
    );
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(CandidateProfileUpdateSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      gender: "",
      birthDate: undefined,
      birthPlace: "",
      religion: "",
      marital: "",
      otherReligion: "",
      hobby: "",
      summary: "",
      address: "",
      city: "",
      postal: "",
      addressDomicile: "",
      cityDomicile: "",
      postalDomicile: "",
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
      setValue("name", current.name);
      setValue("email", current.email);
      setValue("phone", current.phone);
      setValue("gender", current.gender?.code);
      setValue("birthDate", current.birthDate);
      setValue("birthPlace", current.birthPlace);
      setValue("religion", current.religion?.code);
      setValue("marital", current.marital?.code);
      setValue("otherReligion", current.otherReligion);
      setValue("hobby", current.hobby);
      setValue("summary", current.summary);
      setValue("address", current.address);
      setValue("city", current.city);
      setValue("postal", current.postal);
      setValue("addressDomicile", current.addressDomicile);
      setValue("cityDomicile", current.cityDomicile);
      setValue("postalDomicile", current.postalDomicile);

    }
  }, [current]);

  const mutation = CandidateQuery.useUpdateProfile({});

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
    activeFile,

    onUploading,

    methods,
    onSubmit,

    isLoading,
  };
};
