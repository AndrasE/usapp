import React from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';

export default function ProfileScreen() {
  const {theme, textSize} = useUserTheme();
  const {myData} = useUserDb();
  const profileImgUrl = myData.photo;

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
          padding: 30,
          flex: 1,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{uri: profileImgUrl}}
            style={{
              height: textSize.profPicsize + 20,
              width: textSize.profPicsize + 20,
              borderRadius: 40,
              justifyContent: 'center',
              borderColor: theme.text1,
              borderWidth: 1,
            }}
          />
          <Text
            style={{
              fontSize: textSize.searchheader + 5,
              fontFamily: 'SpaceMonoRegular',
              color: theme.text1,
              letterSpacing: 3,
              textAlign: 'center',
            }}>
            {myData.name}
          </Text>
          <Text
            style={{
              fontSize: textSize.searchheader - 5,
              fontFamily: 'SpaceMonoRegular',
              color: theme.text1,
              letterSpacing: 2,
              textAlign: 'center',
              marginBottom: 15,
            }}>
            {myData.email}
          </Text>
          <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
          <View style={{flex: 1, height: 1, backgroundColor: theme.text1}} />
          <View>
            <Text
              style={{
                fontWeight: 400,
                textAlign: 'center',
                color: theme.text2,
                fontSize: textSize.preferencesText - 2,
                fontFamily: 'SpaceMonoRegular',
                letterSpacing: 2,
                color: theme.text1
              }}>
              {' '}
              stats{' '}
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: theme.text1}} />
        </View>
        </View>
      </LinearGradient>
    </View>
  );
}
