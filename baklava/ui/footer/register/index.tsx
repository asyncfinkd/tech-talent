import React from "react";
import { Text, View } from "react-native";

export default function RegisterFooter() {
  return (
    <>
      <View
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
          backgroundColor: "#fff",
        }}
      >
        <View style={{ height: 5, backgroundColor: "#eff3ff" }}>
          <View
            style={{ width: "20%", height: 5, backgroundColor: "#18c729" }}
          />
        </View>
        <View style={{ marginLeft: 15, marginRight: 15 }}>
          <View
            style={{
              paddingTop: 16,
              paddingLeft: 0,
              paddingBottom: 16,
              paddingRight: 0,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
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
                Tell us who you are
              </Text>
              <Text
                style={{
                  opacity: 0.5,
                  fontSize: 14,
                  fontFamily: "markpro-light",
                  lineHeight: 16,
                }}
              >
                Select profession
              </Text>
            </View>
            {/* <View></View> */}
          </View>
        </View>
      </View>
    </>
  );
}
