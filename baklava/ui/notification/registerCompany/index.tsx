import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";

export default function RegisterCompanyNotification() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.containerText}>
          Do you want to join {"\n"} the{" "}
          <Text style={styles.companyText}>Tech Talent</Text> platform?
        </Text>
        <View style={styles.captionContainer}>
          <Text style={{ fontFamily: "markpro-light" }}>
            Submit your contact information {"\n"} and we will contact you
            shortly
          </Text>
        </View>
        <TouchableHighlight style={styles.registerButton}>
          <Text style={styles.registerText}>Register Company</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 0,
    marginRight: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  containerText: {
    margin: 0,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 30,
    fontFamily: "markpro-bold",
  },
  companyText: {
    color: "#0062ff",
  },
  captionContainer: {
    opacity: 0.5,
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 20,
  },
  registerButton: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 40,
    paddingRight: 40,
    color: "#fff",
    backgroundColor: "#7b7ce6",
    borderRadius: 10,
    lineHeight: 20,
  },
  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "markpro-bold",
  },
});
