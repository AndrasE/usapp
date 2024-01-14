import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {Image, Pressable, Text, View} from 'react-native';
import {getDatabase, get, ref, onValue, off, update} from 'firebase/database';


export default function Chat({onBack, myData, selectedUser}) {


  return (
    <>
      <Pressable onPress={onBack} >

      </Pressable>
      <View>
       <Text style={{color: "red", fontSize: 30}}>penisssss</Text> 
      </View>
   
    </>
  );
}


