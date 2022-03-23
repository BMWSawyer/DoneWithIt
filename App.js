//import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  Alert,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-web";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <WelcomeScreen />
    // </SafeAreaView>
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
