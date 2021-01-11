import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearch = () => {
  const [fromText, setFromText] = useState("");
  const [destinationText, setDestinationText] = useState("");

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn("redirect to results");
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: "AIzaSyBEJuq-VEKPFeSGPQGDothoEE01MtPSgLE",
            language: "en",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: "AIzaSyBEJuq-VEKPFeSGPQGDothoEE01MtPSgLE",
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "100%",
  },
  textInput: {
    padding: 10,
    backgroundColor: "#eeee",
    marginVertical: 5,
  },
});
