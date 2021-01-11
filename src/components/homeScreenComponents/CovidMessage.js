import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel if neccessary</Text>
      <Text style={styles.text}>
        Learn how to work with Google maps in react native, to draw routes on
        the maps, and to implement an autocomplete feature for the location
        input.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1065e9",
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    color: "#bed9ff",
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
