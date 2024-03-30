import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ScreenIndex from "../screen";
import navigationString from "./navigationString";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, View } from "react-native";
const Tab = createMaterialTopTabNavigator();

const {width,height}=Dimensions.get('window')




function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        // tabBarGap: 5,
        labelStyle: {
          paddingVertical: 5,
        },
        tabBarIndicatorStyle: {
          //   backgroundColor:"red",
          display: "none",
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        indicatorStyle: { height: 0, display: "none" },
        style: { backgroundColor: "white" },
        tabBarItemStyle: {
          width: width / 4,
          justifyContent: "center",
          alignItems: "center",
        },
        // tabBarBadge:
      }}
    >
      <Tab.Screen
        name={navigationString.chatTab}
        component={ScreenIndex.ChatStack}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  backgroundColor: "rgba(0,0,0,.2)",
                  width: 33,
                  height: 33,
                  borderRadius: 14,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  bottom: -5,
                }}
              >
                <Ionicons name="chatbox" size={20} color={"#030303"} />
              </View>
            ) : (
              <Ionicons name="chatbox-outline" size={24} color={"gray"} />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationString.settingTab}
        component={ScreenIndex.SettingStack}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  backgroundColor: "rgba(0,0,0,.2)",
                  width: 33,
                  height: 33,
                  borderRadius: 14,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  bottom: -5,
                }}
              >
                <Ionicons name="settings-outline" size={20} color={"#030303"} />
              </View>
            ) : (
              <Ionicons name="settings" size={24} color={"gray"} />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationString.updateTab}
        component={ScreenIndex.UpdateStack}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  backgroundColor: "rgba(0,0,0,.2)",
                  width: 33,
                  height: 33,
                  borderRadius: 14,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  bottom: -5,
                }}
              >
                <Ionicons name="notifications" size={20} color={"#030303"} />
              </View>
            ) : (
              <Ionicons name="notifications-outline" size={24} color={"gray"} />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationString.callTab}
        component={ScreenIndex.CallStack}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  backgroundColor: "rgba(0,0,0,.2)",
                  width: 33,
                  height: 33,
                  borderRadius: 14,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  bottom: -5,
                }}
              >
                <Ionicons name="call" size={20} color={"#030303"} />
              </View>
            ) : (
              <Ionicons name="call-outline" size={24} color={"gray"} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs