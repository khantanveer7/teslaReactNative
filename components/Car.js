import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Button from "./Button";

const Car = ({ title, subtitle, img }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../assets/ModelX.jpeg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.subHeading}>{subtitle}</Text>
      </View>
      <Button
        content={"Custom Order"}
        type="primary"
        onPress={() => console.warn("Custom Order")}
      />
      <Button
        content={"Existing Inventory"}
        type="secondary"
        onPress={() => console.warn("Existing Inventory")}
      />
    </View>
  );
};

export default Car;

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
  },
  heading: {
    fontSize: 50,
    fontWeight: "600",
  },
  subHeading: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
