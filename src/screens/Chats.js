import  React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import {useUserDb} from '../config/context/userDbContext';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';


export default function Chats ({onBack, selectedUser}) {
  const {myData} = useUserDb();

  const renderUser = ({item}) => {
    return (
      <Pressable 
      // onPress={() => onClickUser(item)} 
      style={styles.row}>
        <Image style={styles.avatar} source={{uri: item.avatar}} />
        <Text>{item.username}</Text>
      </Pressable>
    );
  };


  return (
    <>
      <Pressable onPress={onBack} >

      </Pressable>
      <View>
       <Text style={{color: "red", fontSize: 30}}> sde</Text> 
      </View>
     
    </>
  );
}


