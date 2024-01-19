import React, {useCallback, useEffect, useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import {getDatabase, get, ref, onValue, off, update} from 'firebase/database';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import LinearGradient from 'react-native-linear-gradient';
import chatScreenStyles from '../styles/chatScreenStyles';


export default function Chat() {
  const [messages, setMessages] = useState([]);
  const {theme, textSize} = useUserTheme();
  const {myData, selectedUser} = useUserDb();
  const styles = chatScreenStyles(theme, textSize);
  const profileImgUrl = myData.photo;

  useEffect(() => {
    //load old messages
    const loadData = async () => {
      const myChatroom = await fetchMessages();

      setMessages(renderMessages(myChatroom.messages));
    };

    loadData();

    // set chatroom change listener
    const database = getDatabase();
    const chatroomRef = ref(database, `chatrooms/${selectedUser.chatroomId}`);
    onValue(chatroomRef, snapshot => {
      const data = snapshot.val();
      setMessages(renderMessages(data.messages));
    });

    return () => {
      //remove chatroom listener
      off(chatroomRef);
    };
  }, [fetchMessages, renderMessages, selectedUser.chatroomId]);

  const renderMessages = useCallback(
    msgs => {
      //structure for chat library:
      // msg = {
      //   _id: '',
      //   user: {
      //     avatar:'',
      //     name: '',
      //     _id: ''
      //   }
      // }

      return msgs
        ? msgs.reverse().map((msg, index) => ({
            ...msg,
            _id: index,
            user: {
              _id:
                msg.sender === myData.name
                  ? myData.username
                  : selectedUser.friendsName,
              avatar:
                msg.sender === myData.name
                  ? myData.photo
                  : selectedUser.friendsPhoto,
              name:
                msg.sender === myData.userame
                  ? myData.name
                  : selectedUser.friendsName,
            },
          }))
        : [];
    },
    [
      myData.photo,
      myData.name,
      selectedUser.friendsPhoto,
      selectedUser.friendsName,
    ],
  );

  const fetchMessages = useCallback(async () => {
    const database = getDatabase();

    const snapshot = await get(
      ref(database, `chatrooms/${selectedUser.chatroomId}`),
    );

    return snapshot.val();
  }, [selectedUser.chatroomId]);

  const onSend = useCallback(
    async (msg = []) => {
      //send the msg[0] to the other user
      const database = getDatabase();

      //fetch fresh messages from server
      const currentChatroom = await fetchMessages();

      const lastMessages = currentChatroom.messages || [];

      update(ref(database, `chatrooms/${selectedUser.chatroomId}`), {
        messages: [
          ...lastMessages,
          {
            text: msg[0].text,
            sender: myData.name,
            createdAt: new Date(),
          },
        ],
      });

      setMessages(prevMessages => GiftedChat.append(prevMessages, msg));
    },
    [fetchMessages, myData.name, selectedUser.chatroomId],
  );

  return (
    <>
      <View style={styles.mainView}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.0, 0.59]}
          colors={[theme.appbg1, theme.appbg2]}
          style={styles.linearGradientBackground}>
          <GiftedChat
            messages={messages}
            onSend={newMessage => onSend(newMessage)}       
            renderBubble={(props) => {
              return (
                <Bubble
                  {...props}
                  textStyle={{
                    right: {
                      paddingTop: 18,
                      color: "#ffff",
                      fontSize: textSize.bubbletextsize,
                      fontFamily: "SpaceMonoRegular"
                    },
                    left: {
                      paddingTop: 18,
                      color: "#191919",
                      fontSize: textSize.bubbletextsize,
                      fontFamily: "SpaceMonoRegular"
                    },
                  }}
                  wrapperStyle={{
                    left: {
                      height: textSize.bubbleheight,
                      backgroundColor: theme.bubbleleft,
                    },
                    right: {
                      height: textSize.bubbleheight,
                      backgroundColor: theme.bubbleright,
                      borderWidth: 1,
                      borderColor: "#ffff"
                    },
                  }}
                />
              );
            }}            
            shouldUpdateMessage={(props, nextProps) =>
              props.extraData !== nextProps.extraData
          }    
            user={{
              _id: myData.username,
            }}
          />
        </LinearGradient>
      </View>
    </>
  );
}
