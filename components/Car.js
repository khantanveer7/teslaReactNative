import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import Button from "./Button";

const Car = ({ name, tagline, img, taglineCTA }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={img} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.subHeading}>
          {tagline} <Text style={styles.subHeadingCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      {/* <Car
      name="Model X"
      tagline="Order Online for"
      taglineCTA="Touchless Delivery"
      img={require("./assets/ModelX.jpeg")}
    /> */}

      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default Car;

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("screen").height,
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
  subHeadingCTA: {
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    padding: 10,
  },
});
