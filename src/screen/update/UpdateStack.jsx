import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationString from "../../navigations/navigationString";
import screenIndex from "../../screen";
const Stack = createNativeStackNavigator();

function UpdateStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={navigationString.updateMainScreen}
        component={screenIndex.UpdateMainScreen}
      />
    </Stack.Navigator>
  );
}

export default UpdateStack;
