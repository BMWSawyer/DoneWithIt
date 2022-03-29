import React from "react";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
//import { StatusBar } from "expo-status-bar";
import Screen from "./app/components/Screen";

export default function App() {
  const categories = [
    { label: "Dinner", value: 1 },
    { label: "Lunch", value: 2 },
    { label: "Breakfast", value: 3 },
  ];

  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
