import React from 'react';
import {Linking, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useUserTheme} from '../config/context/userThemeContext';
import Animated, {FadeIn} from 'react-native-reanimated';
import Lottie from 'lottie-react-native';
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
          locations={[0.0, 0.032]}
          colors={[theme.appbg1, theme.appbg2]}
          style={styles.linearGradientBackground}>
          <View style={styles.contentView}>
            <Animated.View
              entering={FadeIn.duration(500).delay(100)}
              style={styles.headerView}>
              <Text style={styles.header}>Hi, once again! </Text>
            </Animated.View>
            <Animated.View
              entering={FadeIn.duration(900).delay(600)}
              style={styles.headerView}>
              <Text style={styles.headerIcon}>
                <Icon
                  name="code-working-outline"
                  size={textSize.drawerItemsIcon}
                  color={'#ffff'}
                />
              </Text>
            </Animated.View>
            <Animated.View
              entering={FadeIn.duration(500).delay(300)}
              iterationCount="infinite">
              <Text style={styles.paragraph}>
                Here, I'll write a bit more in detail about this app and what it
                took to complete it. If you are not into development, it's
                probably going to bore you and sounds like a lot of humdrum. If
                you would rather watch a cool video,{' '}
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
                I watched countless hours of tutorials to get an idea of how to
                make all this happen. Especially since I was using react native
                the first time, it very well needed to bring me up to the
                challenge. Here are a few that were very helpful for me:{' '}
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
                and many, many more.. Obviously, it was a new experience for me,
                so I had to go through all the teething issues. Setting up
                android studio (had quite a lot of issues with AMD drivers) and
                debugging Eventually, I settled on using both a virtual android
                machine and my physical phone as well.
              </Text>
              <Text style={styles.subHeader}>Expo vs CLI</Text>
              <Text style={styles.paragraph}>
                First, I created a very barebone react native project where you
                could login with your google account. My only issue with this
                was that it needed a redirect to the browser, and the signing in
                didn't take place within the application. I didn`t find this
                elegant enough, so I managed to find the tutorial where it could
                be done, so I axed that project and moved on to CLI.
              </Text>
              <Text style={styles.subHeader}>Packadges</Text>
              <Text style={styles.paragraph}>
                Here are some RN packages I needed for all this to come
                together: async-storage, react-native firebase, google-signin,
                react-native reanimated, modal, linear-gradient, moment,
                switch-selector, lottie, axios, vector-icons, onesignal and of
                course gifted-chat.
              </Text>
              <Text style={styles.subHeader}>Authentication</Text>
              <Text style={styles.paragraph}>
                As soon as you click the application icon, a splash screen
                welcomes you. While the animation of this screen takes place,
                there are many things happening in the background. Firstly,
                check if the user has previously logged in; if so, it will be
                persistent using onAuthStateChanged from RN-Firebase. If this is
                the first time logging in or being logged out previously, we
                will be redirected to the login screen. Using async-storage, the
                user settings (theme and text size) saved on the device will be
                passed on to the application via userThemeContext.js; if they
                were not set before, it will load with a default option. If the
                user is logging in for the first time using _signInWithGoogle
                from react-native-google-signin, we capture a few details from
                the user (name, email address, profile picture). Using these, we
                passed this on via userAuthContext.js and we create an entry in
                the database with the username set to the email address before
                the @ symbol. This will be passed onto the app via
                userDbContext.js. If the user has previously logged in, it will
                be present in the database and we can capture a snapshot of the
                belonging details and serve it to the app. The user will also be
                subscribed to OneSignal services and logged in to their
                database, so later on push notifications can be sent to them.
              </Text>
              <Text style={styles.subHeader}>Gifted-chat</Text>
              <Text style={styles.paragraph}>
                Gifted-chat takes a lot of work from our end; however, you could
                use a flatlist to get similar results. Now that we have a
                database, every change (friends added, messages sent) will be
                logged in our database, and we can access all this with
                userDbContext.js. If the person doesn't have a friend, then
                there will be a small animation and instructions showing what to
                do. When you search for a friend, it checks in the database if
                it exists; if it does, it will create a new entry in the
                database, as in the chatrooms section, containing the details of
                the participants, and create a friend for both users with each
                other's details and the chatroomID, which we can use to access
                later on. When we click on the chat we are trying to access by
                passing this ID, we can fetch the messages previously sent or
                received. When a new message is sent, the given chat room will
                be updated with the new message, onValue from firebase/database
                will be triggered, and a new snapshot of the chatroomof the
                chatroom will be created and displayed to the user. If you are
                interested in how the database setup looks like,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://raw.githubusercontent.com/AndrasE/usapp/main/src/assets/db-screnshot.png',
                    )
                  }>
                  click here
                </Text>
                .
              </Text>
              <Text style={styles.subHeader}>Push notifications</Text>
              <Text style={styles.paragraph}>
                I learned quite a bit from this. I never suspected how this
                works; I thought it would be something simple, but now looking
                back, it does make a lot of sense due to security. I tried and
                succeeded in sending push notifications to devices with cloud
                messaging (FCM) and notifee, but eventually I settled on
                OneSignal. It's slightly more complicated in this app case than,
                for example, a standalone app because we need to be able to send
                notifications to other users from our phone without having admin
                privileges and also securely. What happens is that when you log
                in, the OneSignal database will create a user with the username
                we used in our database, which will be needed to know who is the
                sender and the receiver of the push notification. As we are
                already speaking with a friend and have their username in our
                database, that will also be the user's ID in the onesignals
                database, so we will know who should be the recipient of the
                push notification. What I found interesting is that these push
                notifications are not something I was thinking of before or how
                they can be used for marketing and engaging purposes. Looking at
                both the Google and OneSignals dashboards, you could create
                whole campaigns and measure their success rate, who clicked
                them, who swiped them away, and so forth. Now I can see how this
                is a very important feature of an app. You could send reminders
                when the item`s price has dropped or an abandoned item is in the
                basket, or, for example, try to get away by not doing your
                lesson on Duolingo. You will definitely be reminded.
              </Text>
              <Text style={styles.subHeader}>Shortcomings</Text>
              <Text style={styles.paragraph}>
                Although I`m fairly proud of what I achieved from zero, there
                are limitations to this app. There are many more features that
                could be added. Encrypting messages or being able to delete or
                edit messages,read- receipts, unfriend people, share pictures
                and videos with others, use group chat, and much more. I also
                find that Gifted-chat can become laggy at times. I`m not
                completely certain where the issue is, but I feel that I spent
                enough time on this app, and I`m ready to move on with a
                satisfactory result. My girlfriend and I use this regularly now
                to communicate with each other (hence the name Us). It's a great
                feeling to know that it's my dedication and ideas that came to
                life for something that is not just good-looking but also
                functional.
              </Text>
              <Text style={styles.subHeader}>Farewell</Text>
              <Text style={styles.paragraph}>
                Thank you for trying my app out and reaching this far by reading
                about it.🧡
              </Text>
              <Text style={styles.paragraph}></Text>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL('https://andrasegyed.netlify.app/')
                }>
                andrasegyed.netlify.app/
              </Text>
            </Animated.View>
            <Lottie
              source={require('../assets/lottieAnimations/byee.json')}
              autoPlay={true}
              loop={true}
              speed={0.7}
              style={styles.lottie}
            />
          </View>
        </LinearGradient>
      </ScrollView>
    </>
  );
}
