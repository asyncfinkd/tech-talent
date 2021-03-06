import Svg, { Path } from "react-native-svg";
import React from "react";

export const BurgerMenu = () => {
  return (
    <>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
        <Path d="M21 8H3C2.44772 8 2 8.44772 2 9C2 9.55228 2.44772 10 3 10H21C21.5523 10 22 9.55228 22 9C22 8.44772 21.5523 8 21 8Z"></Path>
        <Path d="M21 14H3C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14Z"></Path>
      </Svg>
    </>
  );
};
