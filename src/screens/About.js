import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useUserTheme} from '../config/context/userThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import aboutScreenStyles from '../styles/aboutScreenStyles';

export default function Chat() {
  const {theme, textSize} = useUserTheme();
  const styles = aboutScreenStyles(theme, textSize);

  return (
    <>
      <View style={styles.mainView}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.0, 0.59]}
          colors={[theme.appbg1, theme.appbg2]}
          style={styles.linearGradientBackground}>
          <View style={styles.contentView}>
            <View style={styles.headerView}>
              <Text style={styles.header}>Hello there!</Text>
              <View>
                <Icon
                  name="hand-left-outline"
                  size={textSize.drawerItemsIcon}
                  color={'#ffff'}
                  style={styles.headerIcon}
                />
              </View>
            </View>
            <View>
              <Text style={styles.paragraph}>
                Thank you for checking out my first React Native project.
              </Text>
              <Text style={styles.paragraph}>
                Although this project is far from perfect, I achieved my goal
                while I learnt a lot while I was{' '}
              </Text>
              <Text style={styles.paragraph}>
                Although this project is far from perfect, it learnt so much
                during writing it
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
  );
}
