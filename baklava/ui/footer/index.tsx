import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

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
});
