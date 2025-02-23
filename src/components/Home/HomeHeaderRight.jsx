import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Heart, Messenger, Plus} from '../../utils/Icons';
import {COLORS} from '../../theme/colors';

const HomeHeaderRight = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        gap: 15,
        marginEnd: 10,
      }}>
      <TouchableOpacity activeOpacity={0.6}>
        <Heart size={24} />
        <View style={styles.dot} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
        <Messenger size={24} />
        <View style={styles.dot} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
        <Plus size={24} />
        <View />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 30,
    top: 0,
    right: 0,
    color: COLORS.RED,
  },
});

export default HomeHeaderRight;
