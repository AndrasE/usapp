import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {getDatabase, get, ref, onValue, off, update} from 'firebase/database';
import { FlatList } from 'react-native-gesture-handler';
import {useUserDb} from '../config/context/userDbContext';


export default function Chat({user, selectedUser}) {

  const {myData, users} = useUserDb();
  
  const renderUser = ({item}) => {
    return (
      <Pressable  style={styles.row}>
        <Image style={styles.avatar} source={{uri: item.friendsPhoto}} />
        <Text style={{color: "red"}}>{item.friendsName}</Text>
      </Pressable>
    );
  };
  return (
    <>
      <View>
       {/* <Text style={{color: "red", fontSize: 30}}>penisssss</Text>  */}
       <Button
       title={myData.name}
        onPress={()=> console.log(users)}
      ></Button>
      </View>

      {/* <View>
      {users.friends.map((friend) => {
        return (
          <View>
            <Text >{friend.name}</Text>
          </View>
        );
      })}
    </View> */}


      <FlatList
        data={users}
        renderItem={renderUser}
         />
   
    </>
  );
}
const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
  },
  addUser: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    backgroundColor: '#cacaca',
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
});


