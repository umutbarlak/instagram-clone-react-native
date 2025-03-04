import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import SearchScreen from '../screens/search';
import ShopScreen from '../screens/shop';
import ReelScreen from '../screens/reel';
import {SCREENS} from '../utils/router';
import {
  Home,
  HomeField,
  Search,
  SearchField,
  Reel,
  ReelField,
  Shop,
  ShopField,
  Logo,
  Heart,
  Messenger,
  Plus,
} from '../utils/Icons';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import HomeHeaderRight from '../components/Home/HomeHeaderRight';
import HomeHeaderLeft from '../components/Home/HomeHeaderLeft';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: 10,
        },
      }}>
      <Tab.Screen
        options={{
          // headerShown: false,
          headerTitle: '',
          tabBarIcon: ({focused}) =>
            focused ? <HomeField size={30} /> : <Home size={30} />,
          headerLeft: () => <HomeHeaderLeft />,
          headerRight: () => <HomeHeaderRight />,
        }}
        name={SCREENS.HOMESCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SearchField size={30} /> : <Search size={30} />,
        }}
        name={SCREENS.SEARCHSCREEN}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ReelField size={30} /> : <Reel size={30} />,
        }}
        name={SCREENS.REELSCREEN}
        component={ReelScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ShopField size={30} /> : <Shop size={30} />,
        }}
        name={SCREENS.SHOPSCREEN}
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: focused => (
            <Image
              style={styles.avatar}
              source={require('../assets/profile.png')}
            />
          ),
        }}
        name={SCREENS.PROFILESCREEN}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 25,
  },
});

export default BottomTabsNavigator;
