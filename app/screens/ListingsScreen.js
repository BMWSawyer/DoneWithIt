import React from "react";
import { FlatList, StyleSheet } from "react-native-web";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Main Course",
    price: 100,
    image: require("../assets/main-course.jpg"),
  },
  {
    id: 2,
    title: "Dessert",
    price: 1000,
    image: require("../assets/dessert.jpg"),
  },
];

export default function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
