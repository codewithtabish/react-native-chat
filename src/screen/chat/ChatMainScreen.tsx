import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaProvider } from "react-native-safe-area-context";

const ChatMainScreen = () => {
  return (
    
    <View style={styles.container}>
      <SafeAreaProvider>
      <PagerView style={styles.pagerView}>
        <View key="1">
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            quos voluptatem mollitia ea recusandae voluptatum facilis maxime
            corporis obcaecati dolor et nemo dolorum cum cupiditate, dolorem
            totam voluptates quod inventore.
          </Text>
        </View>
        {/* Add more pages here */}
      </PagerView>
    </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
    // Add other styles as needed
  },
});

export default ChatMainScreen;
