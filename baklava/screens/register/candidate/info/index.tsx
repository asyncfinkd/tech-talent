import Actions from "../../../../actions/screens/register/candidate/info";
import React from "react";

export default function RegisterCandidateInfoScreen({ navigation }: any) {
  const { control, handleSubmit } = Actions.useForm();

  return (
    <>
      <Actions.View style={{ flex: 1 }}>
        <Actions.RegisterCandidateInfoModules
          navigation={navigation}
          control={control}
        />
        <Actions.RegisterFooter
          thirdStep={true}
          thirdStepOnPress={handleSubmit((data: any) => {
            const requestForData = fetch(
              `https://tech-talent-api.herokuapp.com/api/register/second/step`,
              {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                  Authorization: `Bearer ${Actions.readCookie("cookie")}`,
                },
                body: JSON.stringify({
                  fullName: data.fullName,
                  phone: data.phone,
                  socialNetwork: data.socialNetwork,
                }),
              }
            )
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
              });
          })}
        />
      </Actions.View>
    </>
  );
}
