import React from "react";
//import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={100} />
    </Screen>
  );
}
