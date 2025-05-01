"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { useStorageDirectUpload } from "@/modules/core/hooks";
import { endpoints } from "@/libs/axios";
import { useGetOwnSession } from "../helpers";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useUpdateProfilePicture = (props: Props) => {
  const { session, update } = useGetOwnSession();

  const { activeFile, onUpload } = useStorageDirectUpload({
    endpoint: endpoints.profile.updatePicture,
    defaultFile: session?.profile.picture?.url,
  });

  const onUploading = (file: File) => {
    onUpload(
      { file: file },
      {
        onSuccess: async (file) => {
          await update({
            ...session,
            profile: {
              ...session?.profile,
              picture: file,
            },
          });

          props.onSuccess?.(file);
        },
      }
    );
  };

  return {
    activeFile,

    onUploading,
  };
};
