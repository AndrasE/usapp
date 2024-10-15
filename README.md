<h3 align="center">
  <img src="https://github.com/AndrasE/raw-readme/blob/main/us-readme.png?raw=true" width="80">
  <br/>
  Realtime android React Native chat app
</h3>

## Hello there 👋

I have developed a fully functional Android chat application using React Native CLI. This project showcases my proficiency in React Native development, having invested significant time in learning and practicing the framework.

The application offers a seamless user experience, beginning with a splash screen that provides a brief introduction. Upon launch, the app determines whether the user has previously logged in. If so, it automatically restores their session. For new users or those logging in for the first time, the app directs them to the login screen.

User preferences, such as theme and text size, are preserved across sessions. During the initial login, the app collects essential user information (name, email, profile picture) to create a new database entry where chat history and friends will be stored.

The application integrates with OneSignal to enable push notifications, ensuring users stay updated with real-time messages and events.

At the root of the project, you will find `us-app-debug.apk`, which you can install on your Android device (you will need to enable third-party installation). Feel free to message me if you would like to chat. Search for the user "rohadtsajt" in the app.

[![](https://github.com/AndrasE/raw-readme/blob/main/us-app-yt.gif?raw=true)](https://youtu.be/w_1VowseA3g?si=4nr223Uw9BDL2BHc)

### Key Features

- **User-Friendly Onboarding**: Includes a splash screen and automatic session restoration for returning users or redirects new users to the login screen.
- **User Preferences**: Saves and restores theme and text-size preferences across sessions.
- **Real-Time Chat**: Stores chat history and friends in a real-time database.
- **Push Notifications**: Integrated with OneSignal for real-time message and event notifications.
- **Social Authentication**: Supports Google sign-in via Firebase for quick user login.
- **Pop-Up Modals**: Uses `react-native-modal` for intuitive pop-up windows.
- **Seamless Animations**: Features Lottie animations and React Native Reanimated for smooth transitions.
- **Custom Theming**: Allows users to select themes and text settings with a tri-state switch button.
- **Linear Gradient Design**: Implements gradient backgrounds and buttons for enhanced UI.
- **Gifted Chat UI**: Fully functional chat interface powered by `react-native-gifted-chat`.

### Packages used

- [react-native-firebase](https://rnfirebase.io/) - Responsible for authentication and connecting real-time database.
- [react-native-google-signin](https://github.com/react-native-google-signin/google-signin) - Social authentication via Gmail using Firebase.
- [lottie-react-native](https://www.npmjs.com/package/lottie-react-native) - Lottie animations.
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) - Fade-in animations.
- [react-native-async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage) - Saving users' theme and text-size settings locally.
- [react-native-modal](https://www.npmjs.com/package/react-native-modal) - Pop-up windows.
- [react-native-switch-selector](https://www.npmjs.com/package/react-native-switch-selector) - Tri-state button for selecting theme and text settings.
- [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient) - Linear gradient backgrounds and buttons combined with theming.
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) - SVG icons.
- [react-native-gifted-chat](https://www.npmjs.com/package/react-native-gifted-chat?activeTab=versions) - Complete chat UI.
- [react-native-onesignal](https://documentation.onesignal.com/docs/react-native-sdk-setup) - Push notification and in-app messaging service.
- [react-native-axios](https://www.npmjs.com/package/react-native-axios) - API calls to OneSignal / sending cloud messages.
- [moment.js](https://momentjs.com/) - Date formatting.

### Useful Tutorials

[React-native navigation](https://youtu.be/I7POH4acHV8?si=ujz9tW3-b0x1LFU8), [Lottie & splash](https://youtu.be/mZXCOdIFg6Q?si=KGwVJEzNPHA6h1a_), [React-native Firebase sign-in 1](https://youtu.be/RkQpvlosGz0?si=jaUdyw3E8e13ly2e), [React-native Firebase sign-in 2](https://youtu.be/8aARNaWR78Q?si=mJEqlk6ffdHqNXbN), [React-native Firebase sign-in 3](https://youtu.be/RrGtyfo1wr0?si=_J5qp15yHs-VIO9Y),
[Theming](https://youtu.be/km1qm1Zz2lY?si=owQr0aFeMmk6fvqH),
[AsyncStorage](https://youtu.be/PRGHWgTydyQ?si=b-pveeF2814-PduM),
[Gifted-chat 1](https://youtu.be/Z0riAoqXrwo?si=dMS8Pf6LkjIvFCZK), [Gifted-chat 2](https://youtu.be/Z0riAoqXrwo?si=dMS8Pf6LkjIvFCZK),
[Push notifications 1](https://youtu.be/Qcxa6dxfUFo?si=xZ3G5Cg0_FpmAU9Q), [Push notifications 2](https://youtu.be/X5kjfW1rfig?si=dW8S6h1CiG63fEMC)

The app was built using React Native CLI instead of Expo to enable in-app authentication without a browser redirect. For more details about the project, you can install the app and check the "About" section or access the content directly [here](https://github.com/AndrasE/usapp/blob/main/src/screens/AboutMore.js).

## Run 🚀

These instructions will get you a copy of the project up and running on a virtual or physical Android device. Either install Android Studio and have a virtual machine, or use a device with USB debugging enabled.

Start by cloning this repo on your local machine via CLI or GitHub Desktop:

`
$ git clone https://github.com/AndrasE/usapp
$ cd PROJECTNAME
`

To install and set up the library, run:

`
$ npm i
`

Get SHA certificate fingerprint keys:

`
$ cd android && ./gradlew signingReport
`

Create a firebase android app with authentication and a real-time database. You may need to go to console.cloud.google.com to enable authentication. (firebase should auto-create it, but not 100% will happen):

`
insert SHA keys above
`

[Add Firebase to your Android project](https://firebase.google.com/docs/android/setup)

Create a free OneSingal account. Get onesignal-id and onesignal-barer from app/settings:
`
look for OneSignal App ID & Rest API Key
`

Add your own credentials:

`
$ cd PROJECTNAME && touch .env
setup and insert your own API keys
`

Serving the app:

`
$ npx react-native start
`

For building your own version of the apk follow these steps:

[React Native Generate Debug and Release APK](https://medium.com/geekculture/react-native-generate-apk-debug-and-release-apk-4e9981a2ea51)
