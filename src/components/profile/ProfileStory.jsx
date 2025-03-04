import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Story from '../Home/Story';

const ProfileStory = () => {
  return (
    <ScrollView
      style={styles.stories}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
        <Story
          key={index.toString()}
          image={`https://picsum.photos/200/300?random=${i}`}
          label={'Gezilerimiz'}
        />
      ))}
    </ScrollView>
  );
};

export default ProfileStory;

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 5,
  },
  story: {},
  story: {},
  story: {},
});
