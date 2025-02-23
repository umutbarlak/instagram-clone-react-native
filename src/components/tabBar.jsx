import {Image, TouchableOpacity, View} from 'react-native';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: 30,
        paddingTop: 10,
      }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        // İkonları belirleme
        let iconName;
        if (route.name === 'home') {
          iconName = isFocused
            ? require('../assets/home.png')
            : require('../assets/home-field.png');
        } else if (route.name === 'search') {
          iconName = isFocused
            ? require('../assets/search.png')
            : require('../assets/search-field.png');
        } else if (route.name === 'reel') {
          iconName = isFocused
            ? require('../assets/reel.png')
            : require('../assets/reel-field.png');
        } else if (route.name === 'shop') {
          iconName = isFocused
            ? require('../assets/shop.png')
            : require('../assets/shop-field.png');
        }

        if (route.name === 'profile') {
          return (
            <TouchableOpacity
              style={{flex: 1}}
              key={route.key}
              onPress={onPress}>
              <Image
                style={[
                  {
                    width: 30,
                    height: 30,
                    margin: 'auto',
                    borderWidth: 2,
                    borderRadius: 30,
                    borderColor: 'white',
                  },
                  isFocused ? {borderColor: 'black'} : {},
                ]}
                source={require('../assets/profile.png')}
              />
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity style={{flex: 1}} key={route.key} onPress={onPress}>
            <Image
              style={{width: 30, height: 30, margin: 'auto'}}
              source={iconName}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
