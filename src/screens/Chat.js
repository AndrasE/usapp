import React, {useCallback, useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import {getDatabase, get, ref, off, update, onValue} from 'firebase/database';
import {
  GiftedChat,
  Day,
  Bubble,
  Time,
  InputToolbar,
  Composer,
  Send,
} from 'react-native-gifted-chat';
// import axios from 'axios';
// import {ONESIGNALID, ONESIGNALBEARER} from '@env';
import {onesignalPushNotification} from '../config/firebase/OnesignalFunctions';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import chatScreenStyles from '../styles/chatScreenStyles';

export default function Chat() {
  const {theme, textSize} = useUserTheme();
  const {myData, selectedUser} = useUserDb();
  const [messages, setMessages] = useState([]);

  const styles = chatScreenStyles(theme, textSize);

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
  }, [fetchMessages, renderMessages, selectedUser.chatroomId, theme, textSize]);

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
                msg.sender === myData.username
                  ? myData.username
                  : selectedUser.friendsName,
              avatar:
                msg.sender === myData.username
                  ? myData.photo
                  : selectedUser.friendsPhoto,
              name:
                msg.sender === myData.username
                  ? myData.username
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

  const onSend = msg => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, msg)),
    updateDb(msg);
    console.log('Message sent 💬', msg);
    onesignalPushNotification(selectedUser.friendsUserName, selectedUser.friendsName, msg[0].text);
  };

  //send the msg[0] to the other user
  const updateDb = useCallback(async msg => {
    const database = getDatabase();

    //fetch fresh messages from server
    const currentChatroom = await fetchMessages();

    const lastMessages = currentChatroom.messages || [];

    update(ref(database, `chatrooms/${selectedUser.chatroomId}`), {
      messages: [
        ...lastMessages,
        {
          text: msg[0].text,
          sender: myData.username,
          createdAt: new Date(),
        },
      ],
    });
  });

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
            minInputToolbarHeight={textSize.bubbletextsize + 65}
            minComposerHeight={textSize.bubbletextsize + 33}
            onSend={newMessage => onSend(newMessage)}
            renderDay={props => <Day {...props} textStyle={styles.dayDate} />}
            renderTime={props => (
              <Time
                {...props}
                timeTextStyle={{
                  left: styles.bubbleTimeStampLeft,
                  right: styles.bubbleTimeStampRight,
                }}
              />
            )}
            renderBubble={props => {
              return (
                <View style={{paddingRight: 5}}>
                  <Bubble
                    {...props}
                    textStyle={{
                      right: styles.bubbleTextRight,
                      left: styles.bubbleTextLeft,
                    }}
                    wrapperStyle={{
                      left: styles.bubbleWrapperLeft,
                      right: styles.bubbleWrapperRight,
                    }}
                  />
                </View>
              );
            }}
            renderInputToolbar={props => (
              <InputToolbar {...props} containerStyle={styles.inputToolBar} />
            )}
            renderComposer={props => (
              <Composer
                {...props}
                placeholderTextColor="#fff"
                textInputStyle={styles.textInputStyle}
              />
            )}
            renderSend={props => (
              <Send {...props} containerStyle={styles.sendIconContainer}>
                <Icon name="send-outline" style={styles.sendIcon} />
              </Send>
            )}
            user={{
              _id: myData.username,
            }}
          />
        </LinearGradient>
      </View>
    </>
  );
}
