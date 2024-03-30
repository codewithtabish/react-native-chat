import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationString from './navigationString';
import screenIndex from '../screen'
import BottomTabs from './TabBarNavigation';

const Stack = createNativeStackNavigator();


const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        
      <Stack.Screen name={navigationString.mainStack}
      options={{headerShown:false}}
      component={BottomTabs}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack
