import React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import RegisterCandidateModules from "../../../modules/register/candidate";
import RegisterFooter from "../../../ui/footer/register";

export default function RegisterCandidateScreen({ navigation }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  return (
    <>
      <View style={{ flex: 1 }}>
        <RegisterCandidateModules
          errors={errors}
          navigation={navigation}
          control={control}
          watch={watch}
          getValues={getValues}
        />
        <RegisterFooter
          secondStep={true}
          secondStepOnPress={handleSubmit((data: any) => {
            console.log(data);
          })}
        />
      </View>
    </>
  );
}
