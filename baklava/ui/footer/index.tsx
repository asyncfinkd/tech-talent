import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { CloudSVG } from "../../assets/svg/cloud";
import { FacebookSVG } from "../../assets/svg/facebook";
import { LinkedinSVG } from "../../assets/svg/linkedin";

export default function Footer() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.leftContainer}>
            <Text
              style={{
                fontSize: 40,
                fontFamily: "markpro-bold",
                fontWeight: "700",
              }}
            >
              Welcome to {"\n"}Tech Talent
            </Text>
            <Text
              style={{
                opacity: 0.5,
                fontFamily: "markpro-light",
                marginBottom: 32,
                marginTop: 16,
                fontSize: 20,
              }}
            >
              Tech companies use our platform {"\n"}to find people that fit
              their culture.
            </Text>
            <TouchableHighlight
              onPress={() => console.group(1)}
              style={styles.registerButton}
            >
              <Text style={{ color: "white", fontFamily: "markpro-bold" }}>
                Register
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={{ width: "100%", height: 1, backgroundColor: "#f1f1f5" }} />
      <View style={styles.footerContainer}>
        <View style={styles.footerContent}>
          <View style={styles.socialButtonGroup}>
            <View
              style={{
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  width: 36,
                  height: 36,
                  borderRadius: 12,
                }}
              >
                <FacebookSVG />
              </View>
            </View>
            <View style={{ width: 8 }} />
            <View
              style={{
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  width: 36,
                  height: 36,
                  borderRadius: 12,
                }}
              >
                <LinkedinSVG />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            marginLeft: 0,
            marginBottom: 8,
            marginRight: 0,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CloudSVG />
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "markpro-bold",
                fontWeight: "500",
                marginLeft: 0,
                marginRight: 4,
              }}
            >
              Talent
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "markpro-light",
                fontWeight: "300",
                marginLeft: 0,
                marginRight: 4,
              }}
            >
              Cloud
            </Text>
          </View>
        </View>
        <View
          style={{
            opacity: 0.5,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              fontFamily: "markpro-light",
              lineHeight: 16,
            }}
          >
            Copyright © 2021 Tech Talent. {"\n"} All rights reserved.
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    marginLeft: 15,
    marginRight: 15,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 48,
  },
  leftContainer: {
    marginBottom: 64,
  },
  registerButton: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 44,
    paddingRight: 44,
    borderRadius: 10,
    backgroundColor: "#7b7ce6",
    width: 150,
  },
  footerContainer: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
  },
  footerContent: {
    display: "flex",
    padding: 0,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  socialButtonGroup: {
    marginTop: 20,
    flexDirection: "row",
    display: "flex",
  },
});
