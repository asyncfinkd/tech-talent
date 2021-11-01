import React from "react";
import { Text, View } from "react-native";

export default function RegisterFooter() {
  return (
    <>
      <View style={{ marginLeft: 15, marginRight: 15 }}>
        <View>
          <Text
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
            Register
          </Text>
        </View>
      </View>
    </>
  );
}
