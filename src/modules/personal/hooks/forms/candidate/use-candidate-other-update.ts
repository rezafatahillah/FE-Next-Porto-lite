"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { CandidateQuery } from "../../queries";
import { CandidateOtherUpdateSchema } from "../../../schemes";
import { ICandidateEntity } from "../../../entities";

import { useStorageDirectUpload } from "@/modules/core/hooks";
import { endpoints } from "@/libs/axios";
// import { useGetOwnSession } from "../helpers";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: ICandidateEntity["id"];
  current?: ICandidateEntity;
}

export const useCandidateOtherUpdate = (props: Props) => {

  const [isLoadingData, setIsLoadingData] = useState(true);

  const { id, current, onSuccess } = props;

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(CandidateOtherUpdateSchema),
    defaultValues: {
      workTerm: "",
      expectedSalary: undefined,
      otherFacility: "",
      availability: "",
      interest: [{ text: "" }],
      reason: "",
      strengths: [{ text: "" }],
      weaknesses: [{ text: "" }],
      weight: undefined,
      height: undefined,
      hospitalized: "",
      psychologicalTest: "",
      carOwnership: "No",
      carBrand: "",
      carModel: "",
      carYear: undefined,
      bikeOwnership: "No",
      bikeBrand: "",
      bikeModel: "",
      bikeYear: undefined,
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setValue,
    setError,
  } = methods;

  useEffect(() => {
    // console.log("current:", current);
    if (current) {

      const carOwnershipValue = methods.watch("carOwnership");
    const bikeOwnershipValue = methods.watch("bikeOwnership");

    console.log("Car Ownership: ", carOwnershipValue);
    console.log("Bike Ownership: ", bikeOwnershipValue);

    // Jika Anda ingin mendeteksi perubahan pada carOwnership atau bikeOwnership, Anda bisa memonitor efeknya lebih lanjut:
    const subscription = methods.watch((value) => {
      console.log("Updated Car Ownership:", value.carOwnership);
      console.log("Updated Bike Ownership:", value.bikeOwnership);
    });

    // Bersihkan efek setelah komponen di-unmount
    // return () => subscription.unsubscribe();

      setIsLoadingData(false);

      setValue("workTerm", current.workTerm);
      setValue("expectedSalary", current.expectedSalary);
      setValue("otherFacility", current.otherFacility);
      setValue("availability", current.availability);
      setValue(
        "interest",
        Array.isArray(current.interest)
          ? current.interest.length > 0
            ? [...current.interest]
            : [{ text: "" }]
          : [{ text: "" }]
      );
      setValue(
        "strengths",
        Array.isArray(current.strengths)
          ? [...current.strengths, "", "", ""].slice(0, 3)
          : current.strengths
          ? [current.strengths, "", ""]
          : ["", "", ""]
      ); 
      setValue(
        "weaknesses",
        Array.isArray(current.weaknesses)
          ? [...current.weaknesses, "", "", ""].slice(0, 3)
          : current.weaknesses
          ? [current.weaknesses, "", ""]
          : ["", "", ""]
      ); 
      setValue("reason", current.reason);
      setValue("weight", current.weight);
      setValue("height", current.height);
      setValue("hospitalized", current.hospitalized);
      setValue("psychologicalTest", current.psychologicalTest);
      setValue("carOwnership", current.carOwnership);
      setValue("carBrand", current.carBrand);
      setValue("carModel", current.carModel);
      setValue("carYear", current.carYear);
      setValue("bikeOwnership", current.bikeOwnership);
      setValue("bikeBrand", current.bikeBrand);
      setValue("bikeModel", current.bikeModel);
      setValue("bikeYear", current.bikeYear);
    }
  }, [current]);

  const mutation = CandidateQuery.useUpdateOther({});

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
    isLoadingData,
  };
};
