import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ScreenIndex from "../screen";
import navigationString from "./navigationString";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, useColorScheme, View } from "react-native";
import Colors from "../style/Colors";
const Tab = createMaterialTopTabNavigator();

const {width,height}=Dimensions.get('window')






function BottomTabs() {
      const isDark = useColorScheme() == "dark";
      console.log(isDark)
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
        tabBarActiveTintColor: isDark
          ? Colors.dark.darkText
          : Colors.light.lightText,
        tabBarInactiveTintColor: "gray",
        indicatorStyle: { height: 0, display: "none" },
        style: { backgroundColor: "white" },
        tabBarItemStyle: {
          width: width / 4,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          // backgroundColor:s"red",
          // backgroundColor:isDark?Colors.dark.backgroundColor:Colors.light.backgroundColor,
          backgroundColor: isDark ? "black" : "white",
          // Colors.dark.backgroundColor:Colors.light.backgroundColor,
          // shadowOpacity:0,
          // shadowColor:"none",
          // minHeight:80,
          // marginHorizontal:20
          // padding:20
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
                  backgroundColor: !isDark ? "rgba(0,0,0,.4)" : "#ccc",
                  // backgroundColor:isDark?Colors.dark.darkSecondary:Colors.light.lightSecondary,
                  width: 33,
                  height: 33,
                  borderRadius: 14,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  bottom: -5,
                }}
              >
                <Ionicons
                  name="chatbox-outline"
                  size={20}
                  color={
                    "white"
                    // isDark?Colors.dark.darkText:Colors.light.lightText
                  }
                />
              </View>
            ) : (
              <Ionicons name="chatbox-outline" size={24} color={"gray"} />
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
                  backgroundColor: !isDark ? "rgba(0,0,0,.4)" : "#ccc",
                  // backgroundColor:isDark?Colors.dark.darkSecondary:Colors.light.lightSecondary,
                  width: 33,
                  height: 33,
                  borderRadius: 14,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  bottom: -5,
                }}
              >
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color={
                    "white"
                    // isDark?Colors.dark.darkText:Colors.light.lightText
                  }
                />
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
                  backgroundColor: !isDark ? "rgba(0,0,0,.4)" : "#ccc",
                  // backgroundColor:isDark?Colors.dark.darkSecondary:Colors.light.lightSecondary,
                  width: 33,
                  height: 33,
                  borderRadius: 14,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  bottom: -5,
                }}
              >
                <Ionicons
                  name="call-outline"
                  size={20}
                  color={
                    "white"
                    // isDark?Colors.dark.darkText:Colors.light.lightText
                  }
                />
              </View>
            ) : (
              <Ionicons name="call-outline" size={24} color={"gray"} />
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
                  backgroundColor: !isDark ? "rgba(0,0,0,.4)" : "#ccc",
                  // backgroundColor:isDark?Colors.dark.darkSecondary:Colors.light.lightSecondary,
                  width: 33,
                  height: 33,
                  borderRadius: 14,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  bottom: -5,
                }}
              >
                <Ionicons
                  name="settings-outline"
                  size={20}
                  color={
                    "white"
                    // isDark?Colors.dark.darkText:Colors.light.lightText
                  }
                />
              </View>
            ) : (
              <Ionicons name="settings-outline" size={24} color={"gray"} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs