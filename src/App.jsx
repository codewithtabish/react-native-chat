import React from "react";
import { View, StatusBar, useColorScheme } from "react-native";
import MainStack from "./navigations/MainStack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor={isDarkMode ? "black" : "white"}/>
        <MainStack />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
