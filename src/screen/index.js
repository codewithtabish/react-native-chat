// export { default as ChatMainScreen } from './chat/ChatMainScreen';
// export { default as UpdateMainScreen } from './update/UpdateMainScreen';
// export { default as CallMainScreen } from './call/CallMainScreen';
// export { default as SettingMainScreen } from './setting/SettingMainScreen';
// export { default as ChatStack } from './chat/ChatStack';
// export { default as CallStack } from './call/CallStack';
// export { default as SettingStack } from './setting/SettingStack';
// export { default as UpdateStack } from './update/UpdateStack';

import ChatMainScreen from "./chat/ChatMainScreen";
import UpdateMainScreen from "./update/UpdateMainScreen";
import CallMainScreen from "./call/CallMainScreen";
import SettingMainScreen from "./setting/SettingMainScreen";
import ChatStack from "./chat/ChatStack";
import CallStack from "./call/CallStack";
import SettingStack from "./setting/SettingStack";
import UpdateStack from "./update/UpdateStack";

const ScreenIndex = {
  ChatMainScreen,
  UpdateMainScreen,
  CallMainScreen,
  SettingMainScreen,
  ChatStack,
  CallStack,
  SettingStack,
  UpdateStack
};

export default ScreenIndex;
