import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {getDatabase, get, ref, onValue, off, update} from 'firebase/database';
import {FlatList} from 'react-native-gesture-handler';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import LinearGradient from 'react-native-linear-gradient';
import chatsScreenStyles from '../styles/chatsScreenStyles';

export default function Chat({user, selectedUser}) {
  const {theme, textSize} = useUserTheme();
  const {myData, users} = useUserDb();
  const styles = chatsScreenStyles(theme, textSize);

  const renderUser = ({item}) => {
    return (
      <Pressable style={styles.row}>
        <Image style={styles.photos} source={{uri: item.friendsPhoto}} />
        <Text style={styles.names}>{item.friendsName}</Text>
      </Pressable>
    );
  };
  return (
    <>
      <View style={styles.mainView}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.0, 0.89]}
          colors={[theme.appbg2, theme.appbg1]}
          style={styles.linearGradientBackground}>
          <FlatList data={users} renderItem={renderUser} />
        </LinearGradient>
      </View>
    </>
  );
}
// const styles = StyleSheet.create({
//   avatar: {
//     width: 50,
//     height: 50,
//     marginRight: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     alignItems: 'center',
//     borderBottomColor: '#cacaca',
//     borderBottomWidth: 1,
//   },
//   addUser: {
//     flexDirection: 'row',
//     padding: 10,
//   },
//   input: {
//     backgroundColor: '#cacaca',
//     flex: 1,
//     marginRight: 10,
//     padding: 10,
//   },
// });
