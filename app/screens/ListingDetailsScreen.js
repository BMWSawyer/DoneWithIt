import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/breakfast.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});
