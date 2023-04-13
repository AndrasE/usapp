import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useUserTheme} from '../config/context/userThemeContext';

export default function ProfileScreen() {
  const {theme, textSize} = useUserTheme();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.0, 0.59]}
        colors={[theme.appbg1, theme.appbg2]}
        style={{
          padding: 40,
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: textSize.searchheader,
            fontFamily: 'SpaceMonoRegular',
            color: theme.text1,
            letterSpacing: 3,
            textAlign: 'center',
            marginBottom: 15,
          }}>
          Search for other users by their gmail and start chatting
        </Text>
      </LinearGradient>
    </View>
  );
}
