import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {BurgerMenu, Dropdown, Plus} from '../../utils/Icons';

const ProfileHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.user}>
        <Text style={styles.username}>username</Text>
        <Dropdown size={30} />
      </View>

      <View style={styles.headerRight}>
        <TouchableOpacity>
          <Plus size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <BurgerMenu size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 0,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  username: {
    fontWeight: 700,
    fontSize: 20,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
