import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationString from "../../navigations/navigationString";
import screenIndex from "../../screen";

const Stack = createNativeStackNavigator();

function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
      options={{headerShown:false}}
        name={navigationString.settingMainScreen}
        component={screenIndex.SettingMainScreen}
      />
    </Stack.Navigator>
  );
}

export default SettingStack;
