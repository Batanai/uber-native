import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyBEJuq-VEKPFeSGPQGDothoEE01MtPSgLE";

const RouteMap = () => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };
  const destination = {
    latitude: 28.480127,
    longitude: -16.269045,
  };

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0121,
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />

      <Marker coordinate={origin} title={"Origin"} />

      <Marker coordinate={destination} title={"Destination"} />
    </MapView>
  );
};

export default RouteMap;

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  markerImage: {
    height: 50,
    width: 70,
    resizeMode: "contain",
  },
});
