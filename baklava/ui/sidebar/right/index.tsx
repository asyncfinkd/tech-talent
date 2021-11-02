import Actions from "../../../actions/ui/sidebar/right";
import React from "react";

export default function RightSidebar({ ProfileX, navigation }: any) {
  return (
    <>
      <Actions.Animated.View
        style={{
          position: "absolute",
          // overflow: "scroll",
          backgroundColor: "white",
          top: 57,
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 16,
          paddingRight: 16,
          width: "100%",
          height: "100%",
          zIndex: 9,
          transform: [
            {
              translateX: ProfileX,
            },
          ],
        }}
      >
        <Actions.View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Actions.View
            style={{
              marginRight: 12,
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              borderRadius: 18,
              justifyContent: "center",
              backgroundColor: "#f2f2fc",
            }}
          >
            <Actions.View
              style={{
                width: 36,
                height: 36,
                borderRadius: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <Actions.UserProfile />
            </Actions.View>
          </Actions.View>
          <Actions.View>
            <Actions.Text
              style={{
                fontFamily: "markpro-bold",
                fontSize: 18,
                fontWeight: "500",
                marginBottom: 2,
                lineHeight: 20,
              }}
            >
              Guest
            </Actions.Text>
            <Actions.Text
              style={{
                fontSize: 14,
                fontFamily: "markpro-light",
              }}
            >
              Inactive
            </Actions.Text>
          </Actions.View>
        </Actions.View>
        <Actions.View
          style={{
            height: 1,
            marginTop: 12,
            marginLeft: 0,
            marginRight: 12,
            marginBottom: 0,
            backgroundColor: "#e6e6e6",
          }}
        />
        <Actions.View>
          <Actions.TouchableHighlight
            underlayColor="none"
            onPress={() => navigation.push("Register")}
          >
            <Actions.View
              style={{
                width: "100%",
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 0,
                paddingRight: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <Actions.RegisterSVG />
              <Actions.Text
                style={{
                  marginLeft: 10,
                  fontFamily: "markpro-bold",
                  fontSize: 16,
                  paddingTop: -3,
                }}
              >
                Register
              </Actions.Text>
            </Actions.View>
          </Actions.TouchableHighlight>
          <Actions.TouchableHighlight
            underlayColor="none"
            onPress={() => navigation.push("Login")}
          >
            <Actions.View
              style={{
                width: "100%",
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 0,
                paddingRight: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <Actions.LoginSVG />
              <Actions.Text
                style={{
                  marginLeft: 10,
                  fontFamily: "markpro-bold",
                  fontSize: 16,
                  paddingTop: -3,
                }}
              >
                Login
              </Actions.Text>
            </Actions.View>
          </Actions.TouchableHighlight>
        </Actions.View>
      </Actions.Animated.View>
    </>
  );
}
