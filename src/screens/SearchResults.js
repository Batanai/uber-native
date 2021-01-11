import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UberTypes from "../components/destinationSearchComponents/UberTypes";
import HomeMap from "../components/homeScreenComponents/HomeMap";

const SearchResults = () => {
  return (
    <View>
      <HomeMap />
      <UberTypes />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
