import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useUserTheme} from '../config/context/userThemeContext';
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeIn} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import aboutScreenStyles from '../styles/aboutScreenStyles';

export default function About() {
  const {theme, textSize} = useUserTheme();
  const navigation = useNavigation();

  const styles = aboutScreenStyles(theme, textSize);

  function handleMoreClick(){
    navigation.navigate('AboutMore');
  }

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
            <Animated.View
              entering={FadeIn.duration(500).delay(100)}
              style={styles.headerView}>
              <Text style={styles.header}>Hello there!</Text>
              <Icon
                name="hand-left-outline"
                size={textSize.drawerItemsIcon}
                color={'#ffff'}
                style={styles.headerIcon}
              />
            </Animated.View>
            <Animated.View
              entering={FadeIn.duration(500).delay(300)}
              iterationCount="infinite">
              <Text style={styles.paragraph}>
                Weclome to my first React Native app.
              </Text>
              <Text style={styles.paragraph}>
                Although this project is far from perfect, I managed to achieve
                the goal that I initially set and proud of this.{' '}
              </Text>
              <Text style={styles.paragraph}>
                It took quite a lot of research and studying to complete the
                application, if you wish to read further in details about it hit
                the more button below.
              </Text>
            </Animated.View>
            <Animated.View
              entering={FadeIn.duration(500).delay(500)}
              iterationCount="infinite">
              <TouchableOpacity onPress={handleMoreClick}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  locations={[0.0, 0.99]}
                  colors={[theme.appbg2, theme.appbg1]}
                  style={styles.buttonLinearGradient}>
                  <Text style={styles.buttonText}>more</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </LinearGradient>
      </View>
    </>
  );
}
