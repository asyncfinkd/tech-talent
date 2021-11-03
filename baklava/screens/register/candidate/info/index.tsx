import Actions from "../../../../actions/screens/register/candidate/info";
import React from "react";

export default function RegisterCandidateInfoScreen({ navigation }: any) {
  const { control, handleSubmit } = Actions.useForm();

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

  const retrieveData = async ({ data }: any) => {
    let token: any = await Actions.AsyncStorage.getItem("token");
    fetch(`https://tech-talent-api.herokuapp.com/api/register/second/step`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token).access_token}`,
      },
      body: JSON.stringify({
        fullName: data.fullName,
        phone: data.phone,
        socialNetwork: data.socialNetwork,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          let decoded: any = Actions.jwt_decode(result.access_token);
          _storeData(
            JSON.stringify({ decoded, access_token: result.access_token })
          );
          setAccess_Token(JSON.stringify(decoded));
          navigation.push("Home");
        }
      });
  };
  // let parseToken: any = await JSON.parse(token).access_token;

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
            retrieveData({ data });
          })}
        />
      </Actions.View>
    </>
  );
}
