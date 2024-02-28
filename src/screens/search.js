import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getDatabase, ref, push, update} from 'firebase/database';
import {onesignalPushNotification} from '../config/firebase/OnesignalFunctions';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';
import searchScreenStyles from '../styles/searchScreenStyles';

export default function SearchScreen() {
  const {theme, textSize} = useUserTheme();
  const {myData, findUser} = useUserDb();
  const [value, setValue] = useState();
  const [searchedUserPic, setSearchedUserPic] = useState();
  const [searchedUserName, setSearchedUserName] = useState();
  const [searchedMessege, setSearchedMessege] = useState();
  const [isModalVisible, setModalVisible] = useState(false);

  const styles = searchScreenStyles(textSize, theme);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setValue('');
  };

  function handleSearchPress() {
    onAddFriend(value);
  }

  //check if there is such user, have been previously added or
  //is it current user account, creating chatroom if user exist
  const onAddFriend = async name => {
    if (name !== undefined && name.length > 3) {
      console.log('Searching for user:', name + '@gmail.com 🔍');
      try {
        //find user and add it to my friends and also add me to his friends
        const database = getDatabase();

        const user = await findUser(name);
        if (user) {
          if (user.username === myData.username) {
            setSearchedUserPic(myData.photo);
            setSearchedUserName(myData.name);
            setSearchedMessege('You can`t add yourself as a friend, schizo..');
            setModalVisible(true);
            console.log('You cant add yourself as a friend!⛔');
            return;
          }
          if (
            myData.friends &&
            myData.friends.findIndex(f => f.friendsUserName) > -1
          ) {
            setSearchedUserPic(user.photo);
            setSearchedUserName(user.name);
            setSearchedMessege('is already your friend.. Member?');
            setModalVisible(true);
            console.log('This friend already been added previously..😝');
            return;
          }

          // create a chatroom and store the chatroom
          const newChatroomRef = push(ref(database, 'chatrooms'), {
            firstUser: myData.username,
            secondUser: user.username,
            messages: [],
          });

          const newChatroomId = newChatroomRef.key;

          const userFriends = user.friends || [];
          //join myself to this user friends list
          update(ref(database, `users/${user.username}`), {
            friends: [
              ...userFriends,
              {
                friendsName: myData.name,
                friendsUserName: myData.username,
                friendsPhoto: myData.photo,
                chatroomId: newChatroomId,
              },
            ],
          });

          const myFriends = myData.friends || [];
          //add this user to my friends list
          update(ref(database, `users/${myData.username}`), {
            friends: [
              ...myFriends,
              {
                friendsName: user.name,
                friendsUserName: user.username,
                friendsPhoto: user.photo,
                chatroomId: newChatroomId,
              },
            ],
          });
          setSearchedUserPic(user.photo);
          setSearchedUserName(user.name);
          setSearchedMessege('and you now friends. Be a good one!');
          setModalVisible(true);
          console.log(
            'User found and added as friend, chatroom created. Hurray!🎉',
          );
          onesignalPushNotification(
            user.username,
            myData.name,
            ' added you as a friend. 🎉',
          );
        } else {
          setSearchedUserPic(
            'https://www.pmlive.com/__data/assets/image/0017/450215/behavioural-economics.jpg',
          );
          setSearchedUserName(value + ' ??');
          setSearchedMessege('There must be a typo somewhere!');
          setModalVisible(true);
          console.log('There is no such user registered, typo?🙄');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('You are truly a silly sausuge!🌭');
    }
    console.log(
      '======================================================================',
    );
  };

  return (
    <View style={styles.mainView}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.0, 0.59]}
        colors={[theme.appbg1, theme.appbg2]}
        style={styles.linearGradientBackground}>
        <Lottie
          style={styles.lottie}
          source={require('../assets/lottieAnimations/search.json')}
          autoPlay
          loop={false}
          speed={0.7}
        />
        <Text style={styles.text}>
          Search for other users by their gmail and start chatting
        </Text>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
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
            style={styles.textInputLinearGradient}>
            <Text style={styles.textInputLabel}>@gmail.com</Text>
          </LinearGradient>
        </View>
        <TouchableOpacity title={'Add User'} onPress={handleSearchPress}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            locations={[0.0, 0.99]}
            colors={[theme.appbg2, theme.appbg1]}
            style={styles.buttonLinearGradient}>
            <Text style={styles.buttonText}>search</Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
      <Modal
        backdropColor="#B4B3DB"
        backdropOpacity={0.2}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
        isVisible={isModalVisible}
        style={styles.modal}>
        <View style={styles.modalView}>
          <Image source={{uri: searchedUserPic}} style={styles.modalImage} />
          <Text style={styles.modalTextMain}>{searchedUserName}</Text>
          <Text style={styles.modalTextSecondary}>{searchedMessege}</Text>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            locations={[0.0, 0.99]}
            colors={[theme.appbg2, theme.appbg1]}
            style={styles.modalButtonLinearGradient}>
            <Text onPress={toggleModal} style={styles.modalButtonText}>
              got it
            </Text>
          </LinearGradient>
        </View>
      </Modal>
    </View>
  );
}
