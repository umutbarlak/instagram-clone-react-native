import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import SearchScreen from '../screens/search';
import ShopScreen from '../screens/shop';
import ReelScreen from '../screens/reel';
import {SCREENS} from '../utils/router';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SCREENS.HOMESCREEN} component={HomeScreen} />
      <Tab.Screen name={SCREENS.PROFILESCREEN} component={ProfileScreen} />
      <Tab.Screen name={SCREENS.SEARCHSCREEN} component={SearchScreen} />
      <Tab.Screen name={SCREENS.SHOPSCREEN} component={ShopScreen} />
      <Tab.Screen name={SCREENS.REELSCREEN} component={ReelScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
