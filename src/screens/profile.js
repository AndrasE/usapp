import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import {block} from 'react-native-reanimated';

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
          paddingTop: 30,
          paddingLeft: 15,
          paddingRight: 15,
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
              marginBottom: 35,
            }}>
            {myData.email}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <View style={{flex: 1, height: 1, backgroundColor: theme.text1}} />
            <View>
              <Text
                style={{
                  fontWeight: 400,
                  textAlign: 'center',
                  color: theme.text2,
                  fontSize: textSize.preferencesText,
                  fontFamily: 'SpaceMonoRegular',
                  letterSpacing: 2,
                  color: theme.text1,
                }}>
                {' '}
                stats{' '}
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: theme.text1}} />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}>
          <View style={{width: ' 50%'}}>
            <Text
              style={{
                fontSize: textSize.emailHeader + 2,
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                letterSpacing: 2,
                textAlign: 'center',
                marginBottom: 10,
                textDecorationLine: 'underline',
              }}>
              Registered:
            </Text>
            <Text
              style={{
                fontSize: textSize.emailHeader,
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                letterSpacing: 2,
                textAlign: 'center',
              }}>
              date
            </Text>
          </View>
          <View style={{width: ' 50%', marginBottom: 15}}>
            <Text
              style={{
                fontSize: textSize.emailHeader + 2,
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                letterSpacing: 2,
                textAlign: 'center',
                marginBottom: 10,
                textDecorationLine: 'underline',
              }}>
              Friends:
            </Text>
            <Text
              style={{
                fontSize: textSize.emailHeader,
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                letterSpacing: 2,
                textAlign: 'center',
              }}>
              0
            </Text>
          </View>
          <View style={{width: ' 50%'}}>
            <Text
              style={{
                fontSize: textSize.emailHeader + 2,
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                letterSpacing: 2,
                textAlign: 'center',
                marginBottom: 10,
                textDecorationLine: 'underline',
              }}>
              Inbox:
            </Text>
            <Text
              style={{
                fontSize: textSize.emailHeader,
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                letterSpacing: 2,
                textAlign: 'center',
              }}>
              0
            </Text>
          </View>
          <View style={{width: ' 50%'}}>
            <Text
              style={{
                fontSize: textSize.emailHeader + 2,
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                letterSpacing: 2,
                textAlign: 'center',
                marginBottom: 10,
                textDecorationLine: 'underline',
              }}>
              Outbox:
            </Text>
            <Text
              style={{
                fontSize: textSize.emailHeader,
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                letterSpacing: 2,
                textAlign: 'center',
              }}>
              0
            </Text>
          </View>
          <View style={{alignSelf: 'flex-end'}}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <View style={{flex: 1, height: 1, backgroundColor: theme.text1}} />
            <View>
              <Text
                style={{
                  fontWeight: 400,
                  textAlign: 'center',
                  color: theme.text2,
                  fontSize: textSize.preferencesText,
                  fontFamily: 'SpaceMonoRegular',
                  letterSpacing: 2,
                  color: theme.text1,
                }}>
                {' '}
                Dangerzone{' '}
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: theme.text1}} />
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: textSize.searchheader - 5,
              textAlign: 'center',
              fontFamily: 'SpaceMonoRegular',
              color: theme.text1,
              fontSize: textSize.btns,
              position: 'relative',
              letterSpacing: 2,
              top: -2,
            }}>
            Delete account?
          </Text>
          <TouchableOpacity
            style={{alignItems: 'center', paddingTop: 15}}
            title={'Del User'}
            onPress={() =>
              console.log('I hope to see you again, bye for now! 💀')
            }>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              locations={[0.3, 0.99]}
              colors={['#f9022b', '#ee6781']}
              style={{
                padding: 3,
                borderRadius: 5,
                marginTop: 20,
                marginBottom: 20,
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'SpaceMonoRegular',
                  color: theme.text1,
                  fontSize: 25,
                  position: 'relative',
                  top: -2,
                }}>
                💀 delete 💀
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
