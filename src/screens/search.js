import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import Lottie from 'lottie-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {
  getDatabase,
  get,
  ref,
  set,
  onValue,
  push,
  update,
} from 'firebase/database';

export default function SearchScreen() {
  const {theme, textSize} = useUserTheme();
  const {myData} = useUserDb();
  const [value, setValue] = useState();
  const [searchedUserPic, setSearchedUserPic] = useState();
  const [searchedUserName, setSearchedUserName] = useState();
  const [searchedMessege, setSearchedMessege] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setValue('');
  };

  function handleSearchPress() {
    onAddFriend(value);
  }

  const onAddFriend = async name => {
    if (name !== undefined && name.length > 3) {
      console.log('Searching for user:', name + '@gmail.com 🔍');
      try {
        //find user and add it to my friends and also add me to his friends
        const database = getDatabase();

        const user = await findUser(name);
        if (user) {
          // const who =  myData.friends.findIndex(f => f.username)
          // console.log(who);
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
            myData.friends.findIndex(f => f.username) > -1
          ) {
            setSearchedUserPic(user.photo);
            setSearchedUserName(user.name);
            setSearchedMessege(
              'You forgot about your friend?? Already been added..',
            );
            setModalVisible(true);
            console.log('This friend already been added previously..😝');
            return;
          }
          // create a chatroom and store the chatroom id
          const newChatroomRef = push(ref(database, 'chatrooms'), {
            firstUser: myData.username,
            secondUser: user.username,
            messages: [],
          });

          const newChatroomId = newChatroomRef.key;

          const userFriends = user.friends || [];
          //join myself to this user friend list
          update(ref(database, `users/${user.username}`), {
            friends: [
              ...userFriends,
              {
                username: myData.username,
                photo: myData.photo,
                chatroomId: newChatroomId,
              },
            ],
          });

          const myFriends = myData.friends || [];
          //add this user to my friend list
          update(ref(database, `users/${myData.username}`), {
            friends: [
              ...myFriends,
              {
                username: user.username,
                photo: user.photo,
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

  //finduser signed-in in  database
  const findUser = async name => {
    const database = getDatabase();
    const mySnapshot = await get(ref(database, `users/${name}`));
    return mySnapshot.val();
  };

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
        <Lottie
          style={{
            height: textSize.lottieheight,
            position: 'relative',
            top: -15,
          }}
          source={require('../assets/search.json')}
          autoPlay
          loop={false}
          speed={0.7}
        />
        <Text
          style={{
            fontSize: textSize.searchheader,
            fontFamily: 'SpaceMonoRegular',
            color: theme.text1,
            letterSpacing: 5,
            textAlign: 'center',
            marginBottom: 15,
          }}>
          Search for other users by their gmail and start chatting
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 25}}>
          <TextInput
            style={{
              paddingLeft: 10,
              backgroundColor: theme.text1,
              width: textSize.textinputwidth,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              color: theme.textbg1,
              fontFamily: 'SpaceMonoRegular',
              fontSize: textSize.textinputsize,
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
              width: textSize.textinputwidth,
              fontFamily: 'SpaceMonoRegular',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: textSize.textinputsize,
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
          onPress={handleSearchPress}>
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
                fontSize: textSize.btns,
                width: 70,
              }}>
              search
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
      <Modal
        backdropColor="#B4B3DB"
        backdropOpacity={0.2}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        isVisible={isModalVisible}
        style={{
          marginBottom: 150,
          marginTop: 150,
          marginLeft: 40,
          marginRight: 40,
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignContent: 'center',
            // justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            backgroundColor: theme.appbg1,
            padding: 25,
          }}>
          <Image
            source={{uri: searchedUserPic}}
            style={{
              height: textSize.modalpicheight,
              width: textSize.modalpicheight,
              borderRadius: 40,
              marginTop: 15,
              borderColor: theme.text1,
              borderWidth: 1,
            }}
          />
          <Text
            style={{
              fontSize: textSize.searchheader + 5,
              fontFamily: 'SpaceMonoRegular',
              color: theme.text1,
              letterSpacing: 5,
              textAlign: 'center',
              padding: 15,
              lineHeight: 35,
            }}>
            {searchedUserName}
          </Text>
          <Text
            style={{
              fontSize: textSize.textinputsize,
              fontFamily: 'SpaceMonoRegular',
              color: theme.text1,
              letterSpacing: 5,
              textAlign: 'center',
              marginBottom: 25,
              padding: 15,
              lineHeight: 35,
            }}>
            {searchedMessege}
          </Text>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            locations={[0.0, 0.99]}
            colors={[theme.appbg2, theme.appbg1]}
            style={{
              padding: 3,
              borderRadius: 15,
              marginBottom: 15,
            }}>
            <Text
              onPress={toggleModal}
              style={{
                textAlign: 'center',
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                fontSize: textSize.btns,
                width: 70,
                position: 'relative',
                top: -2,
              }}>
              got it
            </Text>
          </LinearGradient>
        </View>
      </Modal>
    </View>
  );
}
