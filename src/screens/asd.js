import React from 'react';
import {ImageBackground, Button} from 'react-native';
const axios = require('axios');
import {ONESIGNALID, ONESIGNALBEARER} from '@env';

export default function HomeScreen() {

  function send() {
  
  const url = 'https://api.onesignal.com/notifications';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: ONESIGNALBEARER,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      app_id: ONESIGNALID,
      name: 'asd',
      included_segments: ['Active Users'],
      contents: {en: 'English Message'},
      // custom_data: 'none',
      external_id: "egyeand"
    })
  };

  fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
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
