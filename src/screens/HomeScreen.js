import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CovidMessage from "../components/homeScreenComponents/CovidMessage";
import HomeMap from "../components/homeScreenComponents/HomeMap";
import HomeSearch from "../components/homeScreenComponents/HomeSearch";

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.mapContainer}>
        <HomeMap />
      </View>
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mapContainer: {
    height: Dimensions.get("window").height - 400,
  },
});
