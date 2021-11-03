import Actions from "../../../../../actions/modules/register/candidate/info/components/register-form-actions";
import React from "react";

export default function RegisterCandidateInfoForm({
  errors,
  control,
  watch,
  getValues,
}: any) {
  const [fullNameFocused, setFullNameFocused] =
    Actions.useState<boolean>(false);
  const [phoneFocused, setPhoneFocused] = Actions.useState<boolean>(false);
  const [socialNetworkFocused, setSocialNetworkFocused] =
    Actions.useState<boolean>(false);

  return (
    <>
      <Actions.View style={{ marginLeft: 15, marginRight: 15 }}>
        <Actions.View>
          <Actions.Text
            style={{
              marginTop: 16,
              marginLeft: 0,
              marginBottom: 8,
              marginRight: 0,
              fontSize: 24,
              textAlign: "center",
              fontFamily: "markpro-bold",
              fontWeight: "700",
              lineHeight: 28,
            }}
          >
            Contact Information
          </Actions.Text>
          <Actions.Text
            style={{
              opacity: 0.5,
              marginTop: 0,
              marginLeft: 0,
              marginBottom: 16,
              marginRight: 0,
              fontSize: 16,
              textAlign: "center",
              fontFamily: "markpro-light",
              lineHeight: 20,
            }}
          >
            You can use this data when you apply for a job
          </Actions.Text>
        </Actions.View>
      </Actions.View>
    </>
  );
}
