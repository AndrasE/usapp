import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import LinearGradient from 'react-native-linear-gradient';
import chatScreenStyles from '../styles/chatScreenStyles';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const {theme, textSize} = useUserTheme();
  const {myData, selectedUser} = useUserDb();
  const styles = chatScreenStyles(theme, textSize);

  return (
    <>
      <View style={styles.mainView}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.0, 0.59]}
          colors={[theme.appbg1, theme.appbg2]}
          style={styles.linearGradientBackground}>
          <Text style={{color: 'red'}}>{selectedUser.friendsName}</Text>
        </LinearGradient>
      </View>
    </>
  );
}
