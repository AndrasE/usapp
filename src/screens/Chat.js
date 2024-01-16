import React from 'react';
import {Image, Pressable,Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useUserTheme} from '../config/context/userThemeContext';
import {useUserDb} from '../config/context/userDbContext';
import LinearGradient from 'react-native-linear-gradient';
import chatScreenStyles from '../styles/chatScreenStyles';

export default function Chat() {
  const {theme, textSize} = useUserTheme();
  const {users} = useUserDb();
  const styles = chatScreenStyles(theme, textSize);

  const renderUser = ({item}) => {
    return (
      <Pressable style={styles.row} onPress={()=> console.log(item)}>
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
          locations={[0.0, 0.59]}
          colors={[theme.appbg1, theme.appbg2]}
          style={styles.linearGradientBackground}>
          <FlatList data={users} renderItem={renderUser} />
        </LinearGradient>
      </View>
    </>
  );
}
