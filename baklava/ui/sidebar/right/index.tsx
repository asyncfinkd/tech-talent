import React from "react";
import { Animated, View, Text, TouchableHighlight } from "react-native";
import { LoginSVG } from "../../../assets/svg/Login";
import RegisterSVG from "../../../assets/svg/Register";
import { UserProfile } from "../../../assets/svg/UserProfile";

export default function RightSidebar({ ProfileX, navigation }: any) {
  return (
    <>
      <Animated.View
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
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
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
            <View
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
              <UserProfile />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "markpro-bold",
                fontSize: 18,
                fontWeight: "500",
                marginBottom: 2,
                lineHeight: 20,
              }}
            >
              Guest
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "markpro-light",
              }}
            >
              Inactive
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            marginTop: 12,
            marginLeft: 0,
            marginRight: 12,
            marginBottom: 0,
            backgroundColor: "#e6e6e6",
          }}
        />
        <View>
          <TouchableHighlight
            underlayColor="none"
            onPress={() => navigation.push("Register")}
          >
            <View
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
              <RegisterSVG />
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: "markpro-bold",
                  fontSize: 16,
                  paddingTop: -3,
                }}
              >
                Register
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="none"
            onPress={() => navigation.push("Login")}
          >
            <View
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
              <LoginSVG />
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: "markpro-bold",
                  fontSize: 16,
                  paddingTop: -3,
                }}
              >
                Login
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </Animated.View>
    </>
  );
}
