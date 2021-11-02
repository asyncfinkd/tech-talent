import Actions from "../../actions/ui/footer";
import React from "react";
import { TokenProps } from "../../types/app/token";

export default function Footer({ showFullFooter }: any) {
  const { access_token } = Actions.useContext(Actions.ApplicationContext);
  const [tokenData, setTokenData] = Actions.useState<TokenProps>(
    access_token.fullName != "" && JSON.parse(access_token)
  );

  const ButtonSize = tokenData?.logged ? 138 : 150;

  return (
    <>
      {showFullFooter == true && (
        <>
          <Actions.View style={styles.container}>
            <Actions.View style={styles.content}>
              <Actions.View>
                <Actions.Text
                  style={{
                    fontSize: 40,
                    fontFamily: "markpro-bold",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Welcome to {"\n"}Tech Talent
                </Actions.Text>
                <Actions.Text
                  style={{
                    opacity: 0.5,
                    fontFamily: "markpro-light",
                    marginBottom: 32,
                    marginTop: 16,
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  Tech companies use our platform {"\n"}to find people that fit
                  their culture.
                </Actions.Text>
                <Actions.View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Actions.TouchableHighlight
                    onPress={() => console.group(1)}
                    style={[
                      styles.registerButton,
                      {
                        width: ButtonSize,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "auto",
                      },
                    ]}
                  >
                    <Actions.Text
                      style={{
                        color: "white",
                        fontFamily: "markpro-bold",
                        textAlign: "center",
                      }}
                    >
                      {tokenData?.logged ? "Profile" : "Register"}
                    </Actions.Text>
                  </Actions.TouchableHighlight>
                </Actions.View>
              </Actions.View>
            </Actions.View>
          </Actions.View>
        </>
      )}
      <Actions.View
        style={{ width: "100%", height: 1, backgroundColor: "#f1f1f5" }}
      />
      <Actions.View style={styles.footerContainer}>
        <Actions.View style={styles.footerContent}>
          <Actions.View style={styles.socialButtonGroup}>
            <Actions.View
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
              <Actions.View
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
                <Actions.FacebookSVG />
              </Actions.View>
            </Actions.View>
            <Actions.View style={{ width: 8 }} />
            <Actions.View
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
              <Actions.View
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
                <Actions.LinkedinSVG />
              </Actions.View>
            </Actions.View>
          </Actions.View>
        </Actions.View>
        <Actions.View
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
          <Actions.CloudSVG />
          <Actions.View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Actions.Text
              style={{
                fontSize: 16,
                fontFamily: "markpro-bold",
                fontWeight: "500",
                marginLeft: 0,
                marginRight: 4,
              }}
            >
              Talent
            </Actions.Text>
            <Actions.Text
              style={{
                fontSize: 16,
                fontFamily: "markpro-light",
                fontWeight: "300",
                marginLeft: 0,
                marginRight: 4,
              }}
            >
              Cloud
            </Actions.Text>
          </Actions.View>
        </Actions.View>
        <Actions.View
          style={{
            opacity: 0.5,
            marginBottom: 20,
          }}
        >
          <Actions.Text
            style={{
              fontSize: 12,
              textAlign: "center",
              fontFamily: "markpro-light",
              lineHeight: 16,
            }}
          >
            Copyright © 2021 Tech Talent. {"\n"} All rights reserved.
          </Actions.Text>
        </Actions.View>
      </Actions.View>
    </>
  );
}

const styles = Actions.StyleSheet.create({
  container: {
    paddingTop: 44,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 48,
  },
  registerButton: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 44,
    paddingRight: 44,
    borderRadius: 10,
    backgroundColor: "#7b7ce6",
  },
  footerContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
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
