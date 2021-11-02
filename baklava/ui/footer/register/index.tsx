import Actions from "../../../actions/ui/footer/register";
import React from "react";

export default function RegisterFooter({
  firstStep,
  secondStep,
  thirdStep,
  secondStepOnPress,
}: any) {
  return (
    <>
      <Actions.View
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
          backgroundColor: "#fff",
        }}
      >
        <Actions.View style={{ height: 5, backgroundColor: "#eff3ff" }}>
          <Actions.View
            style={{
              width: firstStep ? "20%" : "40%",
              height: 5,
              backgroundColor: "#18c729",
            }}
          />
        </Actions.View>
        <Actions.View style={{ marginLeft: 15, marginRight: 15 }}>
          <Actions.View
            style={{
              paddingTop: 16,
              paddingLeft: 0,
              paddingBottom: 16,
              paddingRight: 0,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Actions.View>
              <Actions.Text
                style={{
                  fontSize: 16,
                  fontFamily: "markpro-bold",
                  fontWeight: "700",
                  lineHeight: 20,
                  marginTop: 0,
                  marginLeft: 0,
                  marginBottom: 4,
                  marginRight: 0,
                }}
              >
                {firstStep ? "Tell us who you are" : "Create Your Account"}
              </Actions.Text>
              <Actions.Text
                style={{
                  opacity: 0.5,
                  fontSize: 14,
                  fontFamily: "markpro-light",
                  lineHeight: 16,
                }}
              >
                {firstStep ? "Select profession" : "Enter Your Credentials"}
              </Actions.Text>
            </Actions.View>
            {secondStep && (
              <Actions.TouchableHighlight
                underlayColor="none"
                style={{
                  backgroundColor: "#7b7ce6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  paddingTop: 14,
                  paddingLeft: 28,
                  paddingBottom: 14,
                  paddingRight: 28,
                }}
                onPress={secondStepOnPress}
              >
                <Actions.Text
                  style={{
                    fontWeight: "500",
                    lineHeight: 20,
                    color: "white",
                  }}
                >
                  Next
                </Actions.Text>
              </Actions.TouchableHighlight>
            )}
          </Actions.View>
        </Actions.View>
      </Actions.View>
    </>
  );
}
