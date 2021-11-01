import React from "react";
import { Text, View, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function RegisterCandidateForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <Text
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
            Enter Your Credentials
          </Text>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "markpro-bold",
                  fontWeight: "700",
                  lineHeight: 20,
                  marginBottom: 20,
                }}
              >
                Email <Text style={{ opacity: 0.2 }}>*</Text>
              </Text>
              <TextInput
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "transparent",
                  paddingTop: 22,
                  paddingLeft: 24,
                  paddingBottom: 22,
                  paddingRight: 24,
                  fontSize: 16,
                  fontFamily: "markpro-light",
                  lineHeight: 20,
                  borderRadius: 15,
                  backgroundColor: "#eff3ff",
                }}
              />
              {/* {errors.email && (
                <Text
                  style={{
                    color: "#d22",
                    fontSize: 14,
                    fontFamily: "markpro-light",
                    lineHeight: 16,
                    paddingTop: 8,
                  }}
                >
                  Valid email is required
                </Text>
              )} */}
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
