import React from "react";
import {
  Appearance,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

const SettingMainScreen = () => {
  const isDark = useColorScheme()=='dark';

  // console.log(colorScheme);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "black" : "white" },
      ]}
    >
      <Text style={{ color: isDark ? "white" : "black" }}>
        Hello World
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingMainScreen;
