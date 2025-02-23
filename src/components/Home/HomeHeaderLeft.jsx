import {View, Text} from 'react-native';
import React from 'react';
import {Logo} from '../../utils/Icons';

const HomeHeaderLeft = () => {
  return (
    <View style={{marginStart: 10}}>
      <Logo size={40} />
    </View>
  );
};

export default HomeHeaderLeft;
