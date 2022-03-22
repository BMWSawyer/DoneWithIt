import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";
import { Button } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
