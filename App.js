import React from "react";
import { StyleSheet, View } from "react-native";
import Car from "./components/Car";
import CarList from "./components/CarList";

const App = () => {
  return (
    <View style={styles.container}>
      <CarList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
