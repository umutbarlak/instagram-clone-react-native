import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/colors';

const ProfileBio = () => {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>Username</Text>
      <Text style={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla id,
        ducimus rem unde mollitia natus.
      </Text>
      <Text style={styles.link}>Link goos here</Text>

      <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.7}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileBio;

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  name: {
    fontWeight: 700,
    color: COLORS.BLACK,
  },
  desc: {
    marginVertical: 5,
    color: COLORS.BLACK,
  },
  link: {
    fontWeight: 500,
    color: COLORS.BLUE,
  },
  editProfileButton: {
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
    alignItems: 'center',
    backgroundColor: COLORS.GRAY,
  },
  editProfileText: {
    fontWeight: 700,
    color: COLORS.BLACK,
  },
});
