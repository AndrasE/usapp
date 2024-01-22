import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Lottie from 'lottie-react-native';
import friendsScreenStyles from '../styles/friendsScreenStyles';

export default function Friends() {
  const {theme, textSize} = useUserTheme();
  const {users, onClickUser} = useUserDb();
  const styles = friendsScreenStyles(theme, textSize);
  const navigation = useNavigation();
  const renderUser = ({item}) => {
    function handleFriendClick() {
      navigation.navigate('Chat');
      onClickUser(item);
    }

    return (
      <Pressable style={styles.row} onPress={handleFriendClick}>
        <Image style={styles.photos} source={{uri: item.friendsPhoto}} />
        <Text style={styles.names}>{item.friendsName}</Text>
      </Pressable>
    );
  };

  if (users) {
    return (
      <>
        <View style={styles.mainView}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            locations={[0.0, 0.59]}
            colors={[theme.appbg1, theme.appbg2]}
            style={styles.linearGradientBackground}>
            <FlatList data={users} renderItem={renderUser} />
          </LinearGradient>
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.mainView}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            locations={[0.0, 0.59]}
            colors={[theme.appbg1, theme.appbg2]}
            style={styles.linearGradientBackground2}>
            <View style={styles.secondaryView}>
              <Text style={styles.text}>
                Your friendlist will appear here. Head over to the search
                section.
              </Text>
              <Lottie
                style={styles.lottie}
                source={require('../assets/lottieAnimations/friends.json')}
                autoPlay
                loop={true}
                speed={0.7}
              />
            </View>
          </LinearGradient>
        </View>
      </>
    );
  }
}
