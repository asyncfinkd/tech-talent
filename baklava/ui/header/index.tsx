import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Header() {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight onPress={() => console.group(1)}>
          <Svg
            // className="fill-0-2-36 menuIcon-0-2-82"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <Path d="M21 8H3C2.44772 8 2 8.44772 2 9C2 9.55228 2.44772 10 3 10H21C21.5523 10 22 9.55228 22 9C22 8.44772 21.5523 8 21 8Z"></Path>
            <Path d="M21 14H3C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14Z"></Path>
          </Svg>
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
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
});
