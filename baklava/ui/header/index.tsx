import { Logo } from "../../assets/svg/Logo";
import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { BurgerMenu } from "../../assets/svg/BurgerMenu";
import { UserIcon } from "../../assets/svg/UserIcon";
import { CloseIconSVG } from "../../assets/svg/closeIcon";

export default function Header({ MenuFunction, Menu, navigation }: any) {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          onPress={MenuFunction}
          style={styles.BurgerMenuButton}
          underlayColor="none"
        >
          <BurgerMenu />
        </TouchableHighlight>
        <View>
          <TouchableHighlight onPress={() => navigation.navigate("Home")}>
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
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          onPress={() => console.group(1)}
          style={styles.BurgerMenuButton}
          underlayColor="none"
        >
          {Menu.value ? <CloseIconSVG /> : <UserIcon />}
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
    backgroundColor: "white",
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
