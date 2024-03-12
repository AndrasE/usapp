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
                Here are some rn packages I needed for all this to come
                together: async-storage, react-native animated, modal,
                linear-gradient, moment, switch-selector, lottie, axios,
                google-signin, vector-icons, firebase/auth, firebase/app,
                onesignal and of course gifted-chat.
              </Text>
              <Text style={styles.subHeader}>Authentication</Text>
              <Text style={styles.paragraph}>
                As soon as you click the application icon there a splash screen
                welcomes you. While the animation of this screen takes place
                there are many things happening in the background. Firstly
                checking if the user has previously logged in, if so it will be
                persistent using onAuthStateChanged from RN-firebase. If this is
                the first time logging in or being logged out previously we will
                be redirected to the login screen. Using async-storage the users
                settings (theme and text-size) saved in the device this will be
                passed on to the application via userThemeContext.js, it is not
                set before it will load with a default option. If the user
                logging in first time using _signInWithGoogle from
                react-native-google-signin we capture a few details from the
                user (name, email-address, profile pic), Using these we passed
                this on via userAuthContext.js and we create an entry in the
                database with the username set to the email address before the @
                symbol. This will be passed onto the app via userDbContext.js.
                If the user has previously logged in will be present in the
                database and we can capture a snapshot of the belonging details
                and serve it to the app. The user also will be subscribed to
                Onesignal services and logged in their database so later on push
                notification can be sent to them.
              </Text>
              <Text style={styles.subHeader}>Gifted-chat</Text>
              <Text style={styles.paragraph}>
                Gifted-chat takes a lot of work from our end, however you could
                use a flatlist to get similar results. Now that we have a
                database, every change (friends added, messages sent) will be
                logged in our database and we can access all this with
                userDbContext.js. If the person doesn't have a friend then there
                will be a small animation and instruction showing what to do.
                When you search for a friend it checks in the database if it
                exists, if does it will create a new entry in the database as in
                the chatrooms section containing the details of the participants
                and create a friend for both users with each other's details and
                the with the chatroomId which we can use to access later on.
                When we click on the chat we are trying to access by passing
                this id we can fetch the messages previously sent/received. When
                a new message is sent the given chat room will be updated with
                the new message and onValue from firebase/database will be
                triggered and a new snapshot will be created of the chatroom and
                displayed to the user.
              </Text>
              <Text style={styles.subHeader}>Push notifications</Text>
              <Text style={styles.paragraph}>
              Oh boi, I learnt quite a bit from this. I never suspected how this works, I thought it would be something simple, but now looking back it does make a lot of sense due to security. I tried and succeeded to send push notifications to devices with cloud-messaging(FCM) and notifee, but eventually I settled with OneSignal. It's slightly more complicated in this app case than for example a standalone app is that we need to be able to send notification to other users from our phone without having admin privileges and also securely. What happens is when you log in, the OneSignal database will create a user with the username we used in our database, which will be needed to know who is the sender and the receiver of the push notification. As we are already speaking with a friend and have its username in our database that also will be an id of the user in onesignals database so we will know who should be the recipient of the push notification. What I found interesting is that these push notifications are not something I was thinking of before and how they can be used for marketing and engaging purposes. Looking at both google and onesignals dashboard you could create whole campaigns and measure its success rate, who clicked, who swiped it away and so forth. Now I can see how this is a very important feature of an app. You could send reminders and item`s price has dropped or an abandoned item in the basket or for example try to get away by not doing your lesson on duolingo you definitely will be reminded.
              </Text>
              <Text style={styles.subHeader}>Shortcomings</Text>
              <Text style={styles.paragraph}>
                sdsdsd
              </Text>
            </Animated.View>
          </View>
        </LinearGradient>
      </ScrollView>
    </>
  );
}
