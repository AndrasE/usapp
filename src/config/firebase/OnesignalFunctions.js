import {LogLevel, OneSignal} from 'react-native-onesignal';
import {ONESIGNALID, ONESIGNALBEARER} from '@env';
import axios from 'axios';

export function onesignalPushNotification(friendsUserName, friendsName, msg) {
  console.log(msg)
  const options = {
    method: 'POST',
    url: 'https://api.onesignal.com/notifications',
    headers: {
      accept: 'application/json',
      Authorization: ONESIGNALBEARER,
      'content-type': 'application/json',
    },
    data: {
      name: friendsUserName,
      app_id: ONESIGNALID,
      contents: {en: friendsName +": " + msg},
      // custom_data: 'string',
      // included_segments: ['Active Subscriptions'],
      include_external_user_ids: [friendsUserName],
    },
  };
  
  axios
    .request(options)
    .then(function () {
      console.log('Push notification sent 📳');
      console.log(
        '======================================================================',
      );
    })

    .catch(function (error) {
      console.error(error);
    });
}

export function initializeOnesignal(userName) {
  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize(ONESIGNALID);

  // requestPermission will show the native iOS or Android notification permission prompt.
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });


  // Log in user for OneSignal service
  OneSignal.login(userName);
}
