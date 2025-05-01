"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { DoctypeQuery } from "../../queries";
import { DoctypeUpdateMultipleSchema } from "../../../schemes";
import { IDoctypeEntity } from "../../../entities";

import { useStorageDirectUpload } from "@/modules/core/hooks";
import { endpoints } from "@/libs/axios";
// import { useGetOwnSession } from "../helpers";

// ----------------------------------------------------------------------


export const useDoctypeUpdate = () => {

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const { data: docData } = DoctypeQuery.useGetAll({
      props: {},
      options: {
        staleTime: Infinity,
      },
    });

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(DoctypeUpdateMultipleSchema),
    defaultValues: {
      doctypes: [],
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setValue,
    setError,
  } = methods;

  const listDoc = docData?.data || [];

  console.log(listDoc)

  useEffect(() => {
    const mapData = () => {
      setLoading(true); 
  
      if (!listDoc) {
        setLoading(false);
        return;
      }

      // setValue("",)

      setLoading(false)
    };
  
    mapData();
    
  }, [listDoc]);

  const mutation = DoctypeQuery.useUpdate({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {

    try {
      // { payload: data },

      router.push(paths.backOffice.personal.doctype.root);
      toast.success("Successfully updated document records!");
      
    } catch (error) {
      const { message, fields } = errorResponseMap(error, {
        message: "Failed to update document records!",
      });

      toast.error(message);

      fields.forEach((item) => {
        setError(item.field, {
          message: item.message,
        });
      });
    }
  });

  return {
    methods,
    onSubmit,

    isLoading,
  };
};
