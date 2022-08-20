import { StatusBar } from "react-native";
import Home from "./src/screens/Home";
import { useFonts } from 'expo-font';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
