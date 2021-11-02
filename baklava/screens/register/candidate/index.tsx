import React, { useState } from "react";
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
  const [emailIsAlreadyRegistered, setEmailIsAlreadyRegistered] =
    useState<boolean>(false);

  return (
    <>
      <View style={{ flex: 1 }}>
        <RegisterCandidateModules
          errors={errors}
          navigation={navigation}
          control={control}
          watch={watch}
          getValues={getValues}
          emailIsAlreadyRegistered={emailIsAlreadyRegistered}
        />
        <RegisterFooter
          secondStep={true}
          secondStepOnPress={handleSubmit((data: any) => {
            const requestForData = fetch(
              `https://tech-talent-api.herokuapp.com/api/register`,
              {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                  email: data.email,
                  password: data.password,
                  role: "member",
                  interest: "dev",
                }),
              }
            )
              .then((res) => res.json())
              .then((result) => {
                if (result.success != true) {
                  setEmailIsAlreadyRegistered(true);
                } else {
                  setEmailIsAlreadyRegistered(false);
                  console.log(result);
                }
              });
          })}
        />
      </View>
    </>
  );
}
