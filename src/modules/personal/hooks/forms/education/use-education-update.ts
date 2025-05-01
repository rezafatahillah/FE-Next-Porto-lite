"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";
import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";

import { EducationQuery } from "../../queries";
import { EducationUpdateMultipleSchema } from "../../../schemes";

// ----------------------------------------------------------------------

export const useEducationUpdate = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const { data: educationData } = EducationQuery.useGetAll({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const methods = useForm({
    mode: "onChange",

    shouldUnregister: false,
    resolver: yupResolver(EducationUpdateMultipleSchema),
    defaultValues: {
      formals: [
        { yearStart: "", yearEnd: "" },
        { yearStart: "", yearEnd: "" },
        { yearStart: "", yearEnd: "" },
        { yearStart: "", yearEnd: "" },
        { yearStart: "", yearEnd: "" },
        { yearStart: "", yearEnd: "" },
        { yearStart: "", yearEnd: "" },
      ],
      informals: [],
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setValue,
    setError,
  } = methods;

  const listEducation = educationData?.data || [];

  // console.log(listEducation);

  useEffect(() => {
    const mapData = () => {
      setLoading(true);

      if (!listEducation) {
        setLoading(false);
        return;
      }

      const formals = listEducation
        .filter((item) => item.status.code === "EDS001")
        .map((item) => ({
          id: item.id,
          status: item.status.code || "",
          education: item.education.code || "",
          name: item.name || "",
          city: item.city || "",
          study: item.study || "",
          yearStart: item.yearStart || "",
          yearEnd: item.yearEnd || "",
        }));

      const informals = listEducation
        .filter((item) => item.status.code === "EDS002")
        .map((item) => ({
          id: item.id,
          status: item.status.code || "",
          education: item.education.code || "",
          name: item.name || "",
          duration: item.duration || undefined,
          certificate: item.certificate || false,
          yearInformal: item.yearInformal || "",
        }));

      setTimeout(() => {
        setValue("formals", formals);
        setValue("informals", informals);
      }, 10);

      setLoading(false);
    };

    mapData();
  }, [listEducation]);

  const mutationUpdate = EducationQuery.useUpdateMultiple({});
  const mutationCreate = EducationQuery.useCreateMultiple({});

  const isLoading =
    isSubmitting || mutationUpdate.isPending || mutationCreate.isPending;

  const onSubmit = handleSubmit(async (data) => {

    const formalsLama = (data.formals ?? []).filter((f) => f.id);
    const formalsBaru = (data.formals ?? []).filter((f) => !f.id);

    const informalsLama = (data.informals ?? []).filter((s) => s.id);
    const informalsBaru = (data.informals ?? []).filter((s) => !s.id);

    const informalsHapus = informalsLama.filter(
      (lama) => !informalsBaru.some((baru) => baru.id === lama.id)
    );

    // console.log("data", data);
    // console.log("informalsLama", informalsLama);
    // console.log("informalsBaru", informalsBaru);

    try {
      if (informalsLama.length > 0) {
        await mutationUpdate.mutateAsync({
          payload: {
            formals: formalsLama,
            informals: informalsLama,
          },
        });
      }

      if (informalsBaru.length > 0) {
        await mutationCreate.mutateAsync({
          payload: {
            informals: informalsBaru,
          },
        });
      }

      // if (informalsHapus.length > 0) {
      //   await EducationQuery.useDeleteMultiple().mutateAsync({
      //     payload: informalsHapus.map((item) => ({ id: item.id })),
      //   });
      // }

      router.push(paths.backOffice.personal.education.root);
      toast.success("Successfully updated education records!");
      
    } catch (error) {
      const { message, fields } = errorResponseMap(error, {
        message: "Failed to update education records!",
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
    loading,
  };
};
