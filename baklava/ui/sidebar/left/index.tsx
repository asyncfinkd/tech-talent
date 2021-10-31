import React from "react";
import { Animated, View, Text, TouchableHighlight } from "react-native";
import { AboutSVG } from "../../../assets/svg/about";
import { CompaniesSVG } from "../../../assets/svg/companies";
import { EducationSVG } from "../../../assets/svg/education";
import { JobsSVG } from "../../../assets/svg/jobs";

export default function LeftSidebar({ MenuX }: any) {
  const MenuData = [
    {
      title: "Jobs",
      svg: JobsSVG,
    },
    {
      title: "Companies",
      svg: CompaniesSVG,
    },
    {
      title: "Courses",
      svg: EducationSVG,
    },
    {
      title: "Education",
      svg: EducationSVG,
      route: "education",
    },
  ];
  return (
    <>
      <Animated.View
        // @ts-ignore
        style={{
          position: "absolute",
          // overflow: "scroll",
          backgroundColor: "white",
          top: 57,
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 16,
          paddingRight: 16,
          width: "100%",
          height: "100%",
          zIndex: 9,
          transform: [
            {
              translateX: MenuX,
            },
          ],
        }}
      >
        <View>
          {MenuData.map((item: any) => {
            return (
              <>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingLeft: 0,
                    paddingRight: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  {item.svg()}
                  <Text style={{ marginLeft: 10, fontFamily: "markpro-bold" }}>
                    {item.title}
                  </Text>
                </View>
              </>
            );
          })}
          <View
            style={{
              display: "flex",
              height: 1,
              marginTop: 12,
              marginBottom: 12,
              marginLeft: 0,
              marginRight: 0,
              backgroundColor: "#e6e6e6",
            }}
          />
          <View>
            <View
              style={{
                width: "100%",
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 0,
                paddingRight: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <AboutSVG />
              <Text style={{ marginLeft: 10, fontFamily: "markpro-bold" }}>
                About
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                height: 1,
                marginTop: 12,
                marginBottom: 12,
                marginLeft: 0,
                marginRight: 0,
                backgroundColor: "#e6e6e6",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "markpro-bold",
                fontWeight: "500",
                lineHeight: 20,
                marginBottom: 12,
              }}
            >
              Language
            </Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableHighlight style={{ marginRight: 16 }}>
                <Text
                  style={{
                    opacity: 0.5,
                    fontWeight: "500",
                    fontFamily: "markpro-bold",
                    lineHeight: 20,
                    fontSize: 16,
                  }}
                >
                  English
                </Text>
              </TouchableHighlight>
              <TouchableHighlight style={{ marginRight: 16 }}>
                <Text
                  style={{
                    opacity: 0.5,
                    fontWeight: "500",
                    fontFamily: "markpro-bold",
                    lineHeight: 20,
                    fontSize: 14,
                  }}
                >
                  ქართული
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
}
