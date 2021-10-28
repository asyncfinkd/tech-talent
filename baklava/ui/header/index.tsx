import { Logo } from "../../assets/svg/Logo";
import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { BurgerMenu } from "../../assets/svg/BurgerMenu";

export default function Header() {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => console.group(1)}
          style={styles.BurgerMenuButton}
        >
          <BurgerMenu />
        </TouchableHighlight>
        <View style={styles.HeaderHero}>
          <View style={styles.HeaderHeroContainer}>
            <Logo />
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
                  fontWeight: "700",
                  marginLeft: 6,
                  marginRight: 6,
                }}
              >
                Tech
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                }}
              >
                Talent
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  BurgerMenuButton: {
    margin: 8,
    fontWeight: "400",
    padding: 8,
  },
  HeaderHero: {
    marginLeft: 10,
  },
  HeaderHeroContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
});
