import React from 'react';
import Stories from '../../components/Home/Stories';
import Posts from '../../components/Home/Posts';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}} edges={['left', 'right']}>
      <Stories />
      <Posts />
    </SafeAreaView>
  );
};

export default HomeScreen;
