<p align="center">
  <img src="https://github.com/AndrasE/raw-readme/blob/main/us-readme.png?raw=true" width="80">
</p>
<h3 align="center">
  Realtime android react-native chat-app
  <br>
  with theme and textzise settings, lottie animations, 
  <br>push notifications and much more.
</h3>
<br/>

## Hello there 👋

After investing some time in learning react-native, watching countless hours of tutorials, I managed to create this fully functional android chat-app using react native CLI. Feel free to install it and try it out. At the root of the project, you will find us-app-debug.apk which you can install on your android device (you will need to enable 3rd-party installation). Feel free to hit me up of you would like to chat, search for user "rohadtsajt" in the app. 😊
<br/>

<p>
Here are a few tutorials I found extremly useful: <br/>
<a
href="https://youtu.be/I7POH4acHV8?si=ujz9tW3-b0x1LFU8"
target="_blank"
rel="noopener noreferrer"
>React-native navigation</a>,
<a
href="https://youtu.be/mZXCOdIFg6Q?si=KGwVJEzNPHA6h1a_"
target="_blank"
rel="noopener noreferrer"
>Lottie & splash</a>,
<a
href="https://youtu.be/RkQpvlosGz0?si=jaUdyw3E8e13ly2e"
target="_blank"
rel="noopener noreferrer"
>React-native firebase signin 1</a>,
<a
href="https://youtu.be/8aARNaWR78Q?si=mJEqlk6ffdHqNXbN"
target="_blank"
rel="noopener noreferrer"
>React-native firebase signin 2</a>,
<a
href="https://youtu.be/RrGtyfo1wr0?si=_J5qp15yHs-VIO9Y"
target="_blank"
rel="noopener noreferrer"
>React-native firebase signin 3</a>,
<a
href="https://youtu.be/km1qm1Zz2lY?si=owQr0aFeMmk6fvqH"
target="_blank"
rel="noopener noreferrer"
>Theming</a>,
<a
href="https://youtu.be/PRGHWgTydyQ?si=b-pveeF2814-PduM"
target="_blank"
rel="noopener noreferrer"
>Asyncstorage</a>,
<a
href="https://youtu.be/Z0riAoqXrwo?si=dMS8Pf6LkjIvFCZK"
target="_blank"
rel="noopener noreferrer"
>Gifted-chat 1</a>,
<a
href="https://youtu.be/Z0riAoqXrwo?si=dMS8Pf6LkjIvFCZK"
target="_blank"
rel="noopener noreferrer"
>Gifted-chat 2</a>,
<a
href="https://youtu.be/Qcxa6dxfUFo?si=xZ3G5Cg0_FpmAU9Q"
target="_blank"
rel="noopener noreferrer"
>Push notifications 1</a>,
<a
href="https://youtu.be/X5kjfW1rfig?si=dW8S6h1CiG63fEMC"
target="_blank"
rel="noopener noreferrer"
>Push notifications 2</a>
</br>
</p>
<p>
Packadges used: 
<li><a
 href="https://rnfirebase.io/"
target="_blank"
rel="noopener noreferrer"
>react-native firebase</a> responseible for authentication, authentication-session and connecting real-time database  
</li>
<li><a
 href="https://github.com/react-native-google-signin/google-signin"
target="_blank"
rel="noopener noreferrer"
>react-native-google-signin</a> social authentication via gmail using react-native firebase
</li>
<li><a
 href="https://www.npmjs.com/package/lottie-react-native"
target="_blank"
rel="noopener noreferrer"
>lottie-react-native</a> lottie animations
</li>
<li><a
 href="https://docs.swmansion.com/react-native-reanimated/"
target="_blank"
rel="noopener noreferrer"
>react-native reanimated</a> fade-in animations
</li>
<li><a
 href="https://www.npmjs.com/package/@react-native-async-storage/async-storage"
target="_blank"
rel="noopener noreferrer"
>react-native-async-storage</a> saving users theme and text-size settings locally
</li>
<li><a
 href="https://www.npmjs.com/package/react-native-modal"
target="_blank"
rel="noopener noreferrer"
>react-native-modal</a> pop-up windows
</li>
<li><a
 href="https://www.npmjs.com/package/react-native-switch-selector"
target="_blank"
rel="noopener noreferrer"
>react-native-switch-selector</a> tri-state button selecting theme and text settings
</li>
<li><a
 href="https://www.npmjs.com/package/react-native-linear-gradient"
target="_blank"
rel="noopener noreferrer"
>react-native-linear-gradient</a> linear-gradient backgrounds and buttons combined w theming
</li>
<li><a
 href="https://www.npmjs.com/package/react-native-vector-icons"
target="_blank"
rel="noopener noreferrer"
>react-native-vector-icons</a> some icons svgs
</li>
<li><a
 href="https://www.npmjs.com/package/react-native-gifted-chat?activeTab=versions"
target="_blank"
rel="noopener noreferrer"
>react-native-gifted-chat</a> complete chat ui 
</li>
<li><a
 href="https://documentation.onesignal.com/docs/react-native-sdk-setup"
target="_blank"
rel="noopener noreferrer"
>react-native-onesignal</a> push notification and in-app message service for mobile apps
</li>
<li><a
 href="https://www.npmjs.com/package/react-native-axios"
target="_blank"
rel="noopener noreferrer"
>react-native-axios</a> for api calls to Onesignal / sending cloud messages
</li>
<li><a
 href="https://momentjs.com/"
target="_blank"
rel="noopener noreferrer"
>moment.js</a> formating dates
</li>
</p>
<p>
The app built with react-native-CLI instead of Expo for the reason that I an in-app authentication wihtout a browiser redirect. 
</p>

## Run 🚀

These instructions will get you a copy of the project up and running on a virtual or physical android device. Either install android studio and have a virtual machine and/or have a device where debugging through usb enabled.

Start with cloning this repo on your local machine via cli or github-desktop:

```sh
$ git clone https://github.com/AndrasE/usapp
$ cd PROJECTNAME
```

To install and set up the library, run:

```sh
$ npm i
```

Get SHA certificate fingerprint keys:

```sh
$ cd android && ./gradlew signingReport
```

Create a firebase android app with authentication and a real-time database. You may need to go to console.cloud.google.com to enable authentication. (firebase should auto-create it, but not 100% will happen):

```sh
insert SHA keys above
```
Add Firebase to your Android project:
<p>
<a
 href="https://firebase.google.com/docs/android/setup"
target="_blank"
rel="noopener noreferrer"
>Add Firebase to your Android project </a></p>
Create a free OneSingal account. Get onesignal-id and onesignal-barer from app/settings:
```sh
look for OneSignal App ID & Rest API Key
```
Add your own credentials:

```sh
$ cd PROJECTNAME && touch .env
setup and insert your own API keys
```



Serving the app:

```sh
$ npx react-native start
```

For building your own version of the apk follow these steps:

<p>
<a
 href="https://medium.com/geekculture/react-native-generate-apk-debug-and-release-apk-4e9981a2ea51"
target="_blank"
rel="noopener noreferrer"
>React Native Generate Debug and Release APK</a></p>

