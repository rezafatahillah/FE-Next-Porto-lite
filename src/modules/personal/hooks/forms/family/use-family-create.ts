"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";
import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { FamilyQuery } from "../../queries";
import { FamilyCreateMultipleSchema } from "../../../schemes";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useFamilyCreate = (props: Props) => {
  const {} = props;

  const router = useRouter();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(FamilyCreateMultipleSchema),
    defaultValues: {
      
      familys: [
        { main: 1, name: "", status: "FML003", birthDate: "", education: "", job: "" },
        { main: 1, name: "", status: "FML004", birthDate: "", education: "", job: "" },
        { main: 1, name: "", status: "FML001", birthDate: "", education: "", job: "" },
      ],
      siblings: [
        // { main: 1, name: "", status:"FML005", birthDate: "", education: "", job: "" },
        // {main: 1, status:"FML005"}
      ],
      childrens: [
        // {main: 1,  name: "", status:"FML002", birthDate: "", education: "", job: "" },
        // {main: 1, status:"FML005"}
      ],
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

  const mutation = FamilyQuery.useCreateMultiple({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      { payload: data },
      {
        onSuccess: (data) => {
          router.push(paths.backOffice.personal.family.root);

          toast.success("Successfully create family!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed create family!",
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
