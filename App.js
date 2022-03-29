import React, { useState } from "react";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
//import { StatusBar } from "expo-status-bar";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Dinner", value: 1 },
  { label: "Lunch", value: 2 },
  { label: "Breakfast", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
