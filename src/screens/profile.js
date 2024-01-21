import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import profileScreenStyles from '../styles/profileScreenStyles';

export default function ProfileScreen() {
  const {theme, textSize} = useUserTheme();
  const {myData} = useUserDb();
  const profileImgUrl = myData.photo;

  const styles = profileScreenStyles(theme, textSize);

  return (
    <View style={styles.mainView}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.0, 0.59]}
        colors={[theme.appbg1, theme.appbg2]}
        style={styles.linearGradientBackground}>
        <View style={styles.profileImageView}>
          <Image
            source={{uri: profileImgUrl}}
            style={styles.profileImageStyle}
          />
          <Text style={styles.textName}>{myData.name}</Text>
          <Text style={styles.textEmail}>{myData.email}</Text>
          <View style={styles.hrContainer}>
            <View style={styles.hrStyle} />
            <View>
              <Text style={styles.hrText}> stats </Text>
            </View>
            <View style={styles.hrStyle} />
          </View>
        </View>
        <View style={styles.statsView}>
          <View style={styles.statsFirstRow}>
            <Text style={styles.statsHeader}>Registered:</Text>
            <Text style={styles.statsContent}>date</Text>
          </View>
          <View style={styles.statsFirstRow}>
            <Text style={styles.statsHeader}>Friends:</Text>
            <Text style={styles.statsContent}>0</Text>
          </View>
          <View style={styles.statsSecondRow}>
            <Text style={styles.statsHeader}>Inbox:</Text>
            <Text style={styles.statsContent}>0</Text>
          </View>
          <View style={styles.statsSecondRow}>
            <Text style={styles.statsHeader}>Outbox:</Text>
            <Text style={styles.statsContent}>0</Text>
          </View>
          <View style={styles.hrContainer}>
            <View style={styles.hrStyle} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
