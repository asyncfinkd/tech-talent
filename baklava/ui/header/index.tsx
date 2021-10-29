import { Logo } from "../../assets/svg/Logo";
import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { BurgerMenu } from "../../assets/svg/BurgerMenu";
import { UserIcon } from "../../assets/svg/UserIcon";

export default function Header({ Menu }: any) {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => Menu.toggle()}
          style={styles.BurgerMenuButton}
        >
          <BurgerMenu />
        </TouchableHighlight>
        <View>
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
                  fontFamily: "markpro-bold",
                }}
              >
                Tech
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  fontFamily: "markpro-light",
                  marginTop: 1.5,
                }}
              >
                Talent
              </Text>
            </View>
          </View>
        </View>
        <TouchableHighlight
          onPress={() => console.group(1)}
          style={styles.BurgerMenuButton}
        >
          <UserIcon />
        </TouchableHighlight>
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
  HeaderHeroContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
});
