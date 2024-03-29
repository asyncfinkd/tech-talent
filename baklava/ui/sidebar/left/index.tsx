import Actions from "../../../actions/ui/sidebar/left";
import React from "react";

export default function LeftSidebar({ MenuX }: any) {
  const MenuData = [
    {
      title: "Jobs",
      svg: Actions.JobsSVG,
    },
    {
      title: "Companies",
      svg: Actions.CompaniesSVG,
    },
    {
      title: "Courses",
      svg: Actions.EducationSVG,
    },
    {
      title: "Education",
      svg: Actions.EducationSVG,
      route: "education",
    },
  ];
  return (
    <>
      <Actions.Animated.View
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
        <Actions.View>
          {MenuData.map((item: any) => {
            return (
              <>
                <Actions.View
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
                  <Actions.Text
                    style={{ marginLeft: 10, fontFamily: "markpro-bold" }}
                  >
                    {item.title}
                  </Actions.Text>
                </Actions.View>
              </>
            );
          })}
          <Actions.View
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
          <Actions.View>
            <Actions.View
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
              <Actions.AboutSVG />
              <Actions.Text
                style={{ marginLeft: 10, fontFamily: "markpro-bold" }}
              >
                About
              </Actions.Text>
            </Actions.View>
            <Actions.View
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
          </Actions.View>
          <Actions.View>
            <Actions.Text
              style={{
                fontSize: 16,
                fontFamily: "markpro-bold",
                fontWeight: "500",
                lineHeight: 20,
                marginBottom: 12,
              }}
            >
              Language
            </Actions.Text>
            <Actions.View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Actions.TouchableHighlight style={{ marginRight: 16 }}>
                <Actions.Text
                  style={{
                    opacity: 0.5,
                    fontWeight: "500",
                    fontFamily: "markpro-bold",
                    lineHeight: 20,
                    fontSize: 16,
                  }}
                >
                  English
                </Actions.Text>
              </Actions.TouchableHighlight>
              <Actions.TouchableHighlight style={{ marginRight: 16 }}>
                <Actions.Text
                  style={{
                    opacity: 0.5,
                    fontWeight: "500",
                    fontFamily: "markpro-bold",
                    lineHeight: 20,
                    fontSize: 14,
                  }}
                >
                  ქართული
                </Actions.Text>
              </Actions.TouchableHighlight>
            </Actions.View>
          </Actions.View>
        </Actions.View>
      </Actions.Animated.View>
    </>
  );
}
