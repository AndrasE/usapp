import React, {useCallback, useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import {getDatabase, get, ref, onValue, off, update} from 'firebase/database';
import {
  GiftedChat,
  Day,
  Bubble,
  Time,
  InputToolbar,
  Composer,
  Send,
} from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import chatScreenStyles from '../styles/chatScreenStyles';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const {theme, textSize} = useUserTheme();
  const {myData, selectedUser} = useUserDb();
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
            minInputToolbarHeight={88}
            renderDay={props => {
              return <Day {...props} textStyle={styles.dayDate} />;
            }}
            renderTime={props => {
              return (
                <Time
                  {...props}
                  timeTextStyle={{
                    left: styles.bubbleTimeStampLeft,
                    right: styles.bubbleTimeStampRight,
                  }}
                />
              );
            }}
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
            renderInputToolbar={props => {
              return (
                <InputToolbar {...props} containerStyle={styles.inputToolBar} />
              );
            }}
            renderComposer={props => {
              return (
                <Composer
                  {...props}
                  placeholderTextColor="#fff"
                  textInputStyle={styles.textInputStyle}
                />
              );
            }}
            renderSend={props => (
              <Send
                {...props}
                containerStyle={styles.sendIconContainer}
               >
                  <Icon
                  name="send-outline"
                  style={styles.sendIcon}
                />
                 
              
            
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
