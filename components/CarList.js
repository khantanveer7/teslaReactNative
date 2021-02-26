import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import carData from "../data/carsData";
import Car from "./Car";

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={carData}
        renderItem={({ item }) => (
          <Car
            name={item.name}
            tagline={item.tagline}
            img={item.img}
            taglineCTA={item.taglineCTA}
          />
        )}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("screen").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
