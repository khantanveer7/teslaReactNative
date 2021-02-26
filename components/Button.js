import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ type, content, onPress }) => {
  //   console.warn(type);
  const button = type;
  const backgroundColor = button === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = button === "primary" ? "#FFFFFF" : "#171A20";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  button: {
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
