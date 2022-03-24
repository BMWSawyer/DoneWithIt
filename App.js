import React from "react";
//import { StatusBar } from "expo-status-bar";
import {
  View,
  Button,
  StyleSheet,
  Text,
  Image,
  Alert,
  Platform,
  SafeAreaView,
} from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <AppButton title="Login" onPress={() => console.log("Tapped")} />
    //     <AppText>Hello</AppText>
    //   </View>
    // </SafeAreaView>
    // <WelcomeScreen />
    // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
    //   <Card
    //     title="Salmon"
    //     subTitle="$100"
    //     image={require("./app/assets/main-course.jpg")}
    //   />
    // </View>
    //<ListingDetailsScreen />
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// <WelcomeScreen />
// <ViewImageScreen />
