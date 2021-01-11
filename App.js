import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import DestinationSearch from "./src/screens/DestinationSearch";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      <DestinationSearch />
    </View>
  );
}

const styles = StyleSheet.create({});
