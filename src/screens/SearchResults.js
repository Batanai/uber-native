import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import UberTypes from "../components/destinationSearchComponents/UberTypes";
import HomeMap from "../components/homeScreenComponents/HomeMap";
import RouteMap from "../components/homeScreenComponents/RouteMap";

const SearchResults = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <RouteMap />
      </View>

      <View style={styles.typesContainer}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  mapContainer: {
    height: Dimensions.get("window").height - 400,
  },
  typesContainer: {
    height: 400,
  },
});
