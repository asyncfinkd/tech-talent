import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import RegisterCandidateModules from "../../../modules/register/candidate";
import RegisterFooter from "../../../ui/footer/register";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApplicationContext } from "../../../context/application";

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

  const _storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem("token", value);
    } catch (error) {
      // Error saving data
    }
  };

  const { access_token, setAccess_Token } = useContext(ApplicationContext);

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
                  let decoded: any = jwt_decode(result.access_token);
                  _storeData(JSON.stringify(decoded));
                  setAccess_Token(JSON.stringify(decoded));
                  navigation.push("RegisterCandidateInfo");
                }
              });
          })}
        />
      </View>
    </>
  );
}
