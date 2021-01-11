import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import UberTypeRow from "./UberTypeRow";
import typesData from "../../assets/data/types";

const UberTypes = () => {
  const confirm = () => {
    console.warn("confirm");
  };

  return (
    <View>
      {typesData.map(({ id, type, price, duration }) => (
        <UberTypeRow key={id} type={type} price={price} duration={duration} />
      ))}

      <Pressable onPress={confirm} style={styles.pressable}>
        <Text style={styles.pressableText}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;

const styles = StyleSheet.create({
  pressable: {
    padding: 10,
    margin: 10,
    backgroundColor: "black",
    alignItems: "center",
  },
  pressableText: {
    fontWeight: "bold",
    color: "white",
  },
});
