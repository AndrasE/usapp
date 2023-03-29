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
        locations={[0.0, 0.69]}
        colors={[theme.textbg1, theme.textbg2]}
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
            fontSize: 35,
            fontFamily: 'SpaceMonoRegular',
            color: theme.text1,
            letterSpacing: 5,
            textAlign: 'center',
          }}>
          Search for other users
        </Text>

        <TextInput
          style={{backgroundColor: theme.text1, marginTop: 20, width: 200, borderRadius: 15}}
          onChangeText={setValue}
          value={value}
        />

        <TouchableOpacity
          style={{alignItems: 'center'}}
          title={'Add User'}
          onPress={() => onAddFriend(value)}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            locations={[0.0, 0.99]}
            colors={[theme.textbg1, theme.textbg1]}
            style={{padding: 2, borderRadius: 15, marginTop: 20}}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                fontSize: 20,
                width: 70,
                position: 'relative',
                top: -2,
              }}>
              search
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}
