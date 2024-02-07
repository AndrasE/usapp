import React from 'react';
import {ImageBackground, Button} from 'react-native';
const axios = require('axios');
import {ONESIGNALID} from '@env';

export default function HomeScreen() {

  
  
    const options = {
      method: 'POST',
      url: 'https://api.onesignal.com/notifications',
      headers: {
        accept: 'application/json',
        Authorization: 'Basic' + {ONESIGNALID},
        'content-type': 'application/json'
      }
    };
    

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  
    
  return (
    <ImageBackground
      source={require('../assets/backgroundImage.jpg')}
      resizeMode={'cover'}
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 30,
      }}>
      <Button 
      // onPress={sendMessageToDevice} 
      title='asdasd'/>

    </ImageBackground>
  );
}
