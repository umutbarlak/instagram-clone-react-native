import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import stories from '../../utils/stories';
import Story from './Story';

const Stories = () => {
  return (
    <ScrollView horizontal>
      {stories.map(item => (
        <Story story={item} />
      ))}
    </ScrollView>
  );
};

export default Stories;
