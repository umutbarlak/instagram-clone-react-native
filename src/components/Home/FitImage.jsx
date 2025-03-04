import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

const FitImage = ({url}) => {
  const ratio = 1080 / width;
  const height = 607 / ratio;

  return <Image source={{uri: url}} width={width} height={height} />;
};

export default FitImage;
