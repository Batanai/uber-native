import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import cars from "../../assets/data/cars";

const HomeMap = () => {
  const getImage = (type) => {
    if (type === "UberX") {
      return require("../../assets/images/top-UberX.png");
    }
    if (type === "Uber Black") {
      return require("../../assets/images/top-UberBlack.png");
    }
    if (type === "UberXL") {
      return require("../../assets/images/top-UberXL.png");
    }
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
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{ latitude: car.latitude, longitude: car.longitude }}
        >
          <Image style={styles.markerImage} source={getImage(car.type)} />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;

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
