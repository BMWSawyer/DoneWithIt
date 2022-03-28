import React, { useState } from "react";
import { Text, TextInput } from "react-native-web";
import AppTextInput from "./app/components/AppTextInput";
//import { StatusBar } from "expo-status-bar";
import Screen from "./app/components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
