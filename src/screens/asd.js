import React from 'react';
import {ImageBackground, Button} from 'react-native';
import {ONESIGNALID, ONESIGNALBEARER} from '@env';
import axios from 'axios';

export default function HomeScreen() {

  function send() {
    const options = {
      method: 'POST',
      url: 'https://api.onesignal.com/notifications',
      headers: {
        accept: 'application/json',
        Authorization: ONESIGNALBEARER,
        'content-type': 'application/json'
      },
      data: {
        app_id: ONESIGNALID,
        headings: {en: 'English Message'},
        contents: {en: 'English Message'},
        include_external_user_ids: ["rohadtsajt", "egyeand"]
      }
    };

  axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  }


  return (
    <ImageBackground
      source={require('../assets/backgroundImage.jpg')}
      resizeMode={'cover'}
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 30,
      }}>
      <Button onPress={send} title="btn" />
    </ImageBackground>
  );
}
