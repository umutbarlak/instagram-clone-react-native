import {
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileBio from '../../components/profile/ProfileBio';
import ProfileStory from '../../components/profile/ProfileStory';
import posts from '../../utils/post';

const {width} = Dimensions.get('window');

const ProfileScreen = () => {
  const numColumns = 3;

  const imageSize = (width - (numColumns - 1)) / numColumns;
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <Image
          width={imageSize}
          height={imageSize}
          source={{uri: item.image}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white'}}
      edges={['left', 'right', 'top']}>
      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <ProfileHeader />
        <ProfileInfo />
        <ProfileBio />
        <ProfileStory />
        <FlatList
          numColumns={numColumns}
          contentContainerStyle={{gap: 1}}
          columnWrapperStyle={{gap: 1}}
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
