import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ProfileInfo = () => {
  return (
    <View style={styles.profileInfo}>
      <LinearGradient
        style={styles.cover}
        colors={['#C913B9', '#F9373F', '#FECD00']}>
        <Image
          source={require('../../assets/profile.png')}
          style={styles.avatar}
        />
      </LinearGradient>
      <View style={styles.statsWrapper}>
        <View style={styles.stats}>
          <Text style={styles.statsNumber}>1,293</Text>
          <Text style={styles.statsLabel}>Posts</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsNumber}>43,353</Text>
          <Text style={styles.statsLabel}>Followers</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsNumber}>5,435</Text>
          <Text style={styles.statsLabel}>Following</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  cover: {
    borderRadius: 45,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  statsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginRight: 10,
  },
  stats: {
    alignItems: 'center',
  },
  statsLabel: {
    marginTop: 4,
  },
  statsNumber: {
    fontSize: 18,
    fontWeight: 700,
  },
});
