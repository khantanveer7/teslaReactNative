import React from "react";
import { StyleSheet, Image, View } from "react-native";

const Nav = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Image style={styles.menu} source={require("../assets/menu.png")} />
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    zIndex: 1000,
  },
  logo: {
    width: 100,
    height: 60,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
