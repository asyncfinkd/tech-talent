import Actions from "../../../actions/screens/register/candidate";
import React from "react";

export default function RegisterCandidateScreen({ navigation }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = Actions.useForm();
  const [emailIsAlreadyRegistered, setEmailIsAlreadyRegistered] =
    Actions.useState<boolean>(false);

  const _storeData = async (value: any) => {
    try {
      await Actions.AsyncStorage.setItem("token", value);
    } catch (error) {
      // Error saving data
    }
  };

  const { access_token, setAccess_Token } = Actions.useContext(
    Actions.ApplicationContext
  );

  return (
    <>
      <Actions.View style={{ flex: 1 }}>
        <Actions.RegisterCandidateModules
          errors={errors}
          navigation={navigation}
          control={control}
          watch={watch}
          getValues={getValues}
          emailIsAlreadyRegistered={emailIsAlreadyRegistered}
        />
        <Actions.RegisterFooter
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
                  let decoded: any = Actions.jwt_decode(result.access_token);
                  _storeData(JSON.stringify(decoded));
                  setAccess_Token(JSON.stringify(decoded));
                  navigation.push("RegisterCandidateInfo");
                }
              });
          })}
        />
      </Actions.View>
    </>
  );
}
