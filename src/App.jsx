import { View } from 'react-native';
import MainStack from './navigations/MainStack'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider >
        <SafeAreaView style={{flex:1}}>
        <MainStack />

        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

export default App
