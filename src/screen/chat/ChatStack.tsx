import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationString from "../../navigations/navigationString";
import screenIndex from '../../screen'

const Stack = createNativeStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={navigationString.chatMainScreen} component={screenIndex.ChatMainScreen} 
      options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default ChatStack;
