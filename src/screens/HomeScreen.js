import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CovidMessage from "../components/homeScreenComponents/CovidMessage";
import HomeMap from "../components/homeScreenComponents/HomeMap";
import HomeSearch from "../components/homeScreenComponents/HomeSearch";

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
