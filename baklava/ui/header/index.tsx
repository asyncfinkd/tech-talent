import Actions from "../.././actions/ui/header";
import React from "react";

export default function Header({
  MenuFunction,
  Menu,
  navigation,
  ProfileFunction,
  Profile,
}: any) {
  return (
    <>
      <Actions.View style={styles.container}>
        <Actions.TouchableHighlight
          onPress={MenuFunction}
          style={styles.BurgerMenuButton}
          underlayColor="none"
        >
          <Actions.BurgerMenu />
        </Actions.TouchableHighlight>
        <Actions.View>
          <Actions.TouchableHighlight
            underlayColor="none"
            onPress={() => navigation.navigate("Home")}
          >
            <Actions.View style={styles.HeaderHeroContainer}>
              <Actions.Logo />
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
                    fontWeight: "700",
                    marginLeft: 6,
                    marginRight: 6,
                    fontFamily: "markpro-bold",
                  }}
                >
                  Tech
                </Actions.Text>
                <Actions.Text
                  style={{
                    fontSize: 14,
                    fontWeight: "300",
                    fontFamily: "markpro-light",
                    marginTop: 1.5,
                  }}
                >
                  Talent
                </Actions.Text>
              </Actions.View>
            </Actions.View>
          </Actions.TouchableHighlight>
        </Actions.View>
        {Menu?.value || Profile?.value ? (
          <>
            <Actions.TouchableHighlight
              onPress={ProfileFunction}
              style={styles.BurgerMenuButton}
              underlayColor="none"
            >
              <Actions.CloseIconSVG />
            </Actions.TouchableHighlight>
          </>
        ) : (
          <>
            <Actions.TouchableHighlight
              onPress={ProfileFunction}
              style={styles.BurgerMenuButton}
              underlayColor="none"
            >
              <Actions.UserIcon />
            </Actions.TouchableHighlight>
          </>
        )}
      </Actions.View>
    </>
  );
}

const styles = Actions.StyleSheet.create({
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
