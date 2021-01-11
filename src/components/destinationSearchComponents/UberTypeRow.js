import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const UberTypeRow = ({ type, price, duration }) => {
  const getImage = () => {
    if (type === "UberX") {
      return require("../../assets/images/UberX.jpeg");
    }
    if (type === "Uber Black") {
      return require("../../assets/images/UberBlack.jpeg");
    }
    if (type === "UberXL") {
      return require("../../assets/images/UberXL.jpeg");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type} <Ionicons name="person" size={12} /> 3
        </Text>
        <Text style={styles.time}>8:30PM drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={18} color="#42d742" />
        <Text style={styles.price}>est. R{price}</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: "contain",
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  time: {
    color: "#5d5d5d",
  },
  rightContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  price: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
});
