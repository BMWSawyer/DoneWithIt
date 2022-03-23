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

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <AppButton title="Login" onPress={() => console.log("Tapped")} />
    //     <AppText>Hello</AppText>
    //   </View>
    // </SafeAreaView>
    <WelcomeScreen />
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
