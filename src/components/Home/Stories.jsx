import {ScrollView} from 'react-native';
import React from 'react';
import stories from '../../utils/stories';
import Story from './Story';

const Stories = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        paddingVertical: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {stories.map(item => (
        <Story key={item.id} image={item.user.avatar} label={item.user.name} />
      ))}
    </ScrollView>
  );
};

export default Stories;
