"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";
import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { DoctypeQuery } from "../../queries";
import { DoctypeCreateMultipleSchema } from "../../../schemes";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useDoctypeCreate = (props: Props) => {
  const {} = props;

  const router = useRouter();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(DoctypeCreateMultipleSchema),
    defaultValues: {
      doctypes: [
        { group: "DOC001", fileId: undefined },
        { group: "DOC002", fileId: undefined },
        { group: "DOC003", fileId: undefined },
        { group: "DOC004", fileId: undefined },
        { group: "DOC005", fileId: undefined },
        { group: "DOC006", fileId: undefined },
        { group: "DOC007", fileId: undefined },
        { group: "DOC008", fileId: undefined },
        { group: "DOC009", fileId: undefined },
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

  const mutation = DoctypeQuery.useCreateMultiple({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    mutation.mutate(
      { payload: data },
      {
        onSuccess: (data) => {
          router.push(paths.backOffice.personal.doctype.root);

          toast.success("Successfully create doctype!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed create doctype!",
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
