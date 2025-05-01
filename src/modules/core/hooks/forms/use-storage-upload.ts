"use client";

import { useEffect, useState } from "react";

import { toast } from "@/templates-ui/components/snackbar";
import { UploadProps } from "@/templates-ui/components/upload";

import { StorageCodeEnum } from "../../enums";
import { StorageQuery } from "../queries";
import { IStorageEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props {
  defaultFile?: UploadProps["defaultFile"];
}

interface DirectUploadProps {
  defaultFile?: UploadProps["defaultFile"];
  endpoint: string;
}

export const useStorageUpload = (props: Props) => {
  const { defaultFile } = props;

  const [activeFile, setActiveFile] = useState<Props["defaultFile"]>();

  useEffect(() => {
    if (defaultFile) {
      setActiveFile(defaultFile);
    }
  }, [defaultFile]);

  const mutation = StorageQuery.useUpload({});

  const delMutation = StorageQuery.useDelete({
    options: {
      onSuccess: () => {
        toast.success("File deleted successfully!");
        setActiveFile(undefined); 
      },
      onError: () => {
        toast.error("Failed to delete file!");
      },
    },
  });

  // TODO: handle chunk upload
  // TODO: handle loading when uploading
  const onUpload = (
    payload: { code: StorageCodeEnum; file: any },
    options?: { onSuccess: (fileId: IStorageEntity) => void }
  ) => {
    const { file } = payload;
    const onSuccess = options?.onSuccess;

    const newFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    mutation.mutate(
      {
        payload,
      },
      {
        onSuccess: (data) => {
          toast.success("Upload success!");
          const uploadedFile = Object.assign(newFile, {
            id: data.data.id,
            fileUrl: data.data.url,
          });
  
          setActiveFile(uploadedFile);

          onSuccess?.(data.data);

          // setActiveFile(newFile);
        },
        onError: (error) => {
          toast.error("Failed upload!");
        },
      }
    );
  };

  // const onRemove = () => {
  //   setActiveFile(undefined);
  // };

  const onRemove = (fileId?: IStorageEntity["id"]) => {
    if (!fileId) {
      // Jika tidak ada fileId, reset activeFile tanpa menghapus file di server
      setActiveFile(undefined);
      return;
    }

    delMutation.mutate(
      { id: fileId }, 
      {
        onSuccess: () => {
          toast.success("File deleted successfully!");
          setActiveFile(undefined); 
        },
        onError: () => {
          toast.error("Failed to delete file!");
        },
      }
    );
  };  

  return {
    mutation,

    activeFile,

    onUpload,
    onRemove,
  };
};

export const useStorageDirectUpload = (props: DirectUploadProps) => {
  const { defaultFile } = props;

  const [activeFile, setActiveFile] = useState<Props["defaultFile"]>();

  useEffect(() => {
    if (defaultFile) {
      setActiveFile(defaultFile);
    }
  }, [defaultFile]);

  const mutation = StorageQuery.useDirectUpload(props.endpoint, {});

  // TODO: handle chunk upload
  // TODO: handle loading when uploading
  const onUpload = (
    payload: { file: any },
    options?: { onSuccess: (file: IStorageEntity) => void }
  ) => {
    const { file } = payload;
    const onSuccess = options?.onSuccess;

    const newFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    mutation.mutate(
      {
        payload,
      },
      {
        onSuccess: (data) => {
          toast.success("Upload success!");

          onSuccess?.(data.data);

          setActiveFile(newFile);
        },
        onError: (error) => {
          toast.error("Failed upload!");
        },
      }
    );
  };

  const onRemove = () => {
    setActiveFile(undefined);
  };

  return {
    mutation,

    activeFile,

    onUpload,
    onRemove,
  };
};
