import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CallMainScreen from "./CallMainScreen";
import navigationString from "../../navigations/navigationString";
import screenIndex from "../../screen";

const Stack = createNativeStackNavigator();

function CallStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={navigationString.callMainScreen}
        component={screenIndex.CallMainScreen}
      />
    </Stack.Navigator>
  );
}

export default CallStack;
