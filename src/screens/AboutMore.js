import React from 'react';
import {Linking, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useUserTheme} from '../config/context/userThemeContext';
import Animated, {FadeIn} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import aboutMoreScreenStyles from '../styles/aboutMoreScreenStyles';

export default function AboutMore() {
  const {theme, textSize} = useUserTheme();
  const styles = aboutMoreScreenStyles(theme, textSize);

  return (
    <>
      <ScrollView style={styles.mainView}>
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
              <Text style={styles.header}>Hi, once again!</Text>
              <Icon
                name="code-working-outline"
                size={textSize.drawerItemsIcon}
                color={'#ffff'}
                style={styles.headerIcon}
              />
            </Animated.View>
            <Animated.View
              entering={FadeIn.duration(500).delay(300)}
              iterationCount="infinite">
              <Text style={styles.paragraph}>
                Here I'll write a bit more in detail about this app and what it
                took to complete it. If you are not into dev it's probably going
                to bore you and sounds like a lot of humdrum.
              </Text>

              <Text style={styles.paragraph}>
                If you rather watch a cool video,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/dQw4w9WgXcQ?si=zs1Aw53fugaWTn9G',
                    )
                  }>
                  click here
                </Text>
                .
              </Text>
              <Text style={styles.subHeader}>Tutorials and other</Text>
              <Text style={styles.paragraph}>
                I watched countless hours of tutorials how to make all this
                happen. Expecially that I was using react native the first time
                it very well needed to bring me up to the chellenge. Here is a
                few that was very helpful for me:{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/I7POH4acHV8?si=ujz9tW3-b0x1LFU8',
                    )
                  }>
                  React native navigation
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/mZXCOdIFg6Q?si=KGwVJEzNPHA6h1a_',
                    )
                  }>
                  Lottie & splash
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/RkQpvlosGz0?si=jaUdyw3E8e13ly2e',
                    )
                  }>
                  React native firebase signin 1
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/8aARNaWR78Q?si=mJEqlk6ffdHqNXbN',
                    )
                  }>
                  React native firebase signin 2
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/RrGtyfo1wr0?si=_J5qp15yHs-VIO9Y',
                    )
                  }>
                  React native firebase signin 3
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/RrGtyfo1wr0?si=isjcxQ1txQlFRCzp',
                    )
                  }>
                  React native firebase signin 2
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/km1qm1Zz2lY?si=owQr0aFeMmk6fvqH',
                    )
                  }>
                  Theming
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/PRGHWgTydyQ?si=b-pveeF2814-PduM',
                    )
                  }>
                  Asyncstorage
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/Z0riAoqXrwo?si=dMS8Pf6LkjIvFCZK',
                    )
                  }>
                  Gifted chat 1
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/EyqI0B4C0D4?si=aYVtswbBJ6xzUHVf',
                    )
                  }>
                  Gifted chat 2
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/Qcxa6dxfUFo?si=xZ3G5Cg0_FpmAU9Q',
                    )
                  }>
                  Push notifications 1
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://youtu.be/X5kjfW1rfig?si=dW8S6h1CiG63fEMC',
                    )
                  }>
                  Push notifications 2
                </Text>{' '}
                and many, many more.. Obviously it was a new experiance for me
                so I had to go through all the teething issues. Setting up
                android studio (had quite a lot issues with AMD drivers) and
                debuddging. Eventually, I settled to use both a virtual android
                machine and my physical phone as well.
              </Text>
              <Text style={styles.subHeader}>Expo vs CLI</Text>
              <Text style={styles.paragraph}>
                First I created a very barebone react native project where you
                could login with your google account. My only issue with this
                was that it needed a redirect and the signin didn't take place
                within the application. I didn`t find this elegant enough so I
                managed to find the tutorial where it could be done so I axed
                that project and moved on to CLI.
              </Text>
              <Text style={styles.subHeader}>Packadges</Text>
              <Text style={styles.paragraph}>
              Here are some packages I needed for all this to come together: async-storage, eanimated, modal, linear-gradient, moment, switch-selector, lottie, axios, google-signin, vector-icons, firebase/auth, firebase/app, onesignal and of course gifted-chat. 
              </Text>
            </Animated.View>
          </View>
        </LinearGradient>
      </ScrollView>
    </>
  );
}
