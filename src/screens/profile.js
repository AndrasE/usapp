import React from 'react';
import {Image, Text, View, TouchableOpacity, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import {useUserAuth} from '../config/context/userAuthContext';
import Lottie from 'lottie-react-native';
import moment from 'moment';
import profileScreenStyles from '../styles/profileScreenStyles';

export default function ProfileScreen() {
  const {theme, textSize} = useUserTheme();
  const {myData} = useUserDb();
  const {user} = useUserAuth();
  const registered = moment(user.metadata.creationTime).format(
    'HH:mm DD/MM/YY',
  );
  const loggedinsince = moment(user.metadata.lastSignInTime).format(
    'HH:mm DD/MM/YY',
  );

  const styles = profileScreenStyles(theme, textSize);

  function checkFriendNum() {
    if (!myData.friends || myData.friends.length == 0) {
      return '0';
    } else {
      return myData.friends.length;
    }
  }

  return (
    <View style={styles.mainView}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.0, 0.59]}
        colors={[theme.appbg1, theme.appbg2]}
        style={styles.linearGradientBackground}>
        <View style={styles.profileView}>
          <Image
            source={{uri: user.photoURL}}
            style={styles.profileImageStyle}
          />
          <Text style={styles.textName}>{user.displayName.split(' ')[0]}</Text>
          <Text style={styles.textEmail}>{user.email}</Text>
        </View>
        <View style={styles.hrContainer}>
          <View style={styles.hrStyle} />
          <View>
            <Text style={styles.hrText}> stats </Text>
          </View>
          <View style={styles.hrStyle} />
        </View>

        <View style={styles.statsView}>
          <View style={styles.statsFirstRow}>
            <Text style={styles.statsHeader}>registered:</Text>
            <Text style={styles.statsContent}>{registered}</Text>
          </View>
          <View style={styles.statsFirstRow}>
            <Text style={styles.statsHeader}>lastlogin:</Text>
            <Text style={styles.statsContent}>{loggedinsince}</Text>
          </View>
          <View style={styles.statsFirstRow}>
            <Text style={styles.statsHeader}>username:</Text>
            <Text style={styles.statsContent}>{myData.username}</Text>
          </View>
          <View style={styles.statsFirstRow}>
            <Text style={styles.statsHeader}>friends:</Text>
            <Text style={styles.statsContent}>{checkFriendNum()}</Text>
          </View>
          <View style={styles.hrContainer}>
            <View style={styles.hrStyle} />
          </View>
        </View>

        <View style={styles.secondaryView}>
          <Text style={styles.text}>You are my sunshine!</Text>
          <Lottie
            style={styles.lottie}
            source={require('../assets/lottieAnimations/splash.json')}
            autoPlay
            loop={false}
            speed={0.7}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
