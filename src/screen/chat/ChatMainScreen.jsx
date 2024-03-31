import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../../style/Colors";

const ChatMainScreen = () => {
    const isDark = useColorScheme()=='dark';
  
  return (
  <View
  className='flex-1'
  style={{backgroundColor:isDark?Colors.dark.darkBackground:Colors.light.lightBackground}}>
    <Text
    style={{color:isDark?Colors.dark.darkText:Colors.light.lightText}}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptate quibusdam ad consequatur officia! Non et ea natus, repellendus, vitae placeat dignissimos eveniet eligendi deleniti at facere molestiae perspiciatis nostrum!
    </Text>

  </View>
  );
};



export default ChatMainScreen;
