import Actions from "../../../actions/ui/footer/register";
import React from "react";

export default function RegisterFooter({
  firstStep,
  secondStep,
  thirdStep,
  secondStepOnPress,
  thirdStepOnPress,
}: any) {
  const renderButton = () => {
    if (secondStep || thirdStep) {
      return (
        <>
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
            onPress={secondStepOnPress ?? thirdStepOnPress}
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
        </>
      );
    }
  };

  const renderTitle = () => {
    if (firstStep || thirdStep) {
      return "Tell us who you are";
    } else {
      return "Create Your Account";
    }
  };

  const renderSubTitle = () => {
    if (firstStep) {
      return "Select profession";
    } else if (thirdStep) {
      return "Contact Information";
    } else {
      return "Enter Your Credentials";
    }
  };

  const renderPercent = () => {
    if (firstStep) {
      return "20%";
    } else if (secondStep) {
      return "40%";
    } else {
      return "60%";
    }
  };

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
              width: renderPercent(),
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
                {renderTitle()}
              </Actions.Text>
              <Actions.Text
                style={{
                  opacity: 0.5,
                  fontSize: 14,
                  fontFamily: "markpro-light",
                  lineHeight: 16,
                }}
              >
                {renderSubTitle()}
              </Actions.Text>
            </Actions.View>
            {renderButton()}
          </Actions.View>
        </Actions.View>
      </Actions.View>
    </>
  );
}
