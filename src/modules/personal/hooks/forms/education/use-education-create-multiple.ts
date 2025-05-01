"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";
import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { EducationQuery } from "../../queries";
import { EducationCreateSchema, EducationCreateMultipleSchema } from "../../../schemes";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useEducationCreateMultiple = (props: Props) => {
  const {} = props;

  const router = useRouter();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(EducationCreateMultipleSchema),
      defaultValues: {
        formals: [
          { status: "EDS001", education: "EDU001", name: "", city: "", study: "", yearStart: "", yearEnd: "" },
          { status: "EDS001", education: "EDU002", name: "", city: "", study: "", yearStart: "", yearEnd: "" },
          { status: "EDS001", education: "EDU003", name: "", city: "", study: "", yearStart: "", yearEnd: "" },
          { status: "EDS001", education: "EDU004", name: "", city: "", study: "", yearStart: "", yearEnd: "" },
          { status: "EDS001", education: "EDU005", name: "", city: "", study: "", yearStart: "", yearEnd: "" },
          { status: "EDS001", education: "EDU006", name: "", city: "", study: "", yearStart: "", yearEnd: "" },
          { status: "EDS001", education: "EDU007", name: "", city: "", study: "", yearStart: "", yearEnd: "" },
        ],
      informals:[
        
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

  const mutation = EducationQuery.useCreateMultiple({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)

    const formattedData = {
      ...data,
      formals: data.formals?.map((item) => ({
        ...item,
        yearStart: item.yearStart
          ? new Date(item.yearStart).getFullYear().toString()
          : undefined,
        yearEnd: item.yearEnd
          ? new Date(item.yearEnd).getFullYear().toString()
          : undefined,
      })),
      informals: data.informals?.map((item) => ({
        ...item,
        yearInformal: item.yearInformal
          ? new Date(item.yearInformal).getFullYear().toString()
          : undefined,
      })),
    };
    mutation.mutate(
      { payload: formattedData },
      {
        onSuccess: (data) => {
          router.push(paths.backOffice.personal.education.root);

          toast.success("Successfully create education!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed create education!",
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
