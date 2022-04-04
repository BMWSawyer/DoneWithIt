import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";

//import { StatusBar } from "expo-status-bar";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert("You need to enable permissions to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}
