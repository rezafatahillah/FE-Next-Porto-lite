"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";
import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";

import { FamilyQuery } from "../../queries";
import { FamilyUpdateMultipleSchema } from "../../../schemes";

// ----------------------------------------------------------------------

export const useFamilyUpdate = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const { data: familyData } = FamilyQuery.useGetAll({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const methods = useForm({
    mode: "onChange",

    shouldUnregister: false,
    resolver: yupResolver(FamilyUpdateMultipleSchema),
    defaultValues: {
      familys: [],
      siblings: [],
      childrens: [],
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setValue,
    setError,
  } = methods;

  const listFamily = familyData?.data || [];

  useEffect(() => {
    const mapData = () => {
      setLoading(true); 
  
      if (!listFamily) {
        setLoading(false);
        return;
      }
  
      const familys = listFamily
        .filter((item) => ["FML001", "FML003", "FML004"].includes(item.status.code))
        .map((item) => ({
          id: item.id,
          main: item.main,
          name: item.name || "",
          status: item.status.code || "",
          birthDate: item.birthDate || "",
          education: item.education?.code || "",
          job: item.job || "",
        }));
  
      const siblings = listFamily
        .filter((item) => item.status.code === "FML005")
        .map((item) => ({
          id: item.id,
          main: item.main,
          name: item.name || "",
          status: item.status.code || "",
          birthDate: item.birthDate || "",
          education: item.education?.code || "",
          job: item.job || "",
        }));
  
      const childrens = listFamily
        .filter((item) => item.status.code === "FML002")
        .map((item) => ({
          id: item.id,
          main: item.main,
          name: item.name || "",
          status: item.status.code || "",
          birthDate: item.birthDate || "",
          education: item.education?.code || "",
          job: item.job || "",
        }));

      setTimeout(() => {
        setValue("familys", familys);
        setValue("siblings", siblings);
        setValue("childrens", childrens);
      }, 1);

      setLoading(false)
    };
  
    mapData();
    
  }, [listFamily]);
  

  const mutationUpdate = FamilyQuery.useUpdateMultiple({});
  const mutationCreate = FamilyQuery.useCreateMultiple({});

  const isLoading =
    isSubmitting || mutationUpdate.isPending || mutationCreate.isPending;

  const onSubmit = handleSubmit(async (data) => {
    const familysLama = (data.familys ?? []).filter((f) => f.id);
    const familysBaru = (data.familys ?? []).filter((f) => !f.id);

    const siblingsLama = (data.siblings ?? []).filter((s) => s.id);
    const siblingsBaru = (data.siblings ?? []).filter((s) => !s.id);

    const childrensLama = (data.childrens ?? []).filter((c) => c.id);
    const childrensBaru = (data.childrens ?? []).filter((c) => !c.id);

    // console.log("siblingLama", siblingsLama);
    // console.log("siblingBaru", siblingsBaru);

    try {
      if (siblingsLama.length > 0 || childrensLama.length > 0) {
        await mutationUpdate.mutateAsync({
          payload: {
            familys: familysLama,
            siblings: siblingsLama,
            childrens: childrensLama,
          },
        });
      }

      if (siblingsBaru.length > 0 || childrensBaru.length > 0) {
        await mutationCreate.mutateAsync({
          payload: {
            siblings: siblingsBaru,
            childrens: childrensBaru,
          },
        });
      }

      router.push(paths.backOffice.personal.family.root);
      toast.success("Successfully updated family records!");
      
    } catch (error) {
      const { message, fields } = errorResponseMap(error, {
        message: "Failed to update family records!",
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
