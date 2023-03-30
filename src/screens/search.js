import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import Lottie from 'lottie-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SearchScreen() {
  const {theme, textSize} = useUserTheme();
  const {onAddFriend} = useUserDb();
  const [value, setValue] = useState();

  return (
    <>
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
        <Lottie
          style={{height: 100, position: 'relative', top: -15}}
          source={require('../assets/search.json')}
          autoPlay
          loop={false}
          speed={0.7}
        />
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'SpaceMonoRegular',
            color: theme.text1,
            letterSpacing: 5,
            textAlign: 'center',
            marginBottom: 15,
          }}>
          Search for other users by their gmail and start chatting
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
          <TextInput
            style={{
              paddingLeft: 10,
              backgroundColor: theme.text1,
              width: 150,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              color: theme.textbg1,
              fontFamily: 'SpaceMonoRegular',
              fontSize: 20,
              letterSpacing: 3,
            }}
            onChangeText={setValue}
            value={value}
            placeholder="example"
            placeholderTextColor="#D3D3D9"
            autoCapitalize="none"
          />
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            locations={[0.0, 0.99]}
            colors={[theme.appbg1, theme.appbg2]}
            style={{
              backgroundColor: theme.text1,
              width: 150,
              fontFamily: 'SpaceMonoRegular',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                letterSpacing: 3,
                position: 'relative',
                top: -2,
              }}>
              @gmail.com
            </Text>
          </LinearGradient>
        </View>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          title={'Add User'}
          onPress={() => onAddFriend(value)}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            locations={[0.0, 0.99]}
            colors={[theme.appbg2, theme.appbg1]}
            style={{
              padding: 3,
              borderRadius: 15,
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
                fontSize: 20,
                width: 70,
              }}>
              search
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}
