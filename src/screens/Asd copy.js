import React from 'react';
import {ImageBackground, Button} from 'react-native';
import { getFCMAccessToken } from '../config/firebase/GoogleSingIn';

export default function HomeScreen() {

  const sendMessageToDevice = async () => {
    // Construct the request body
    const requestBody = {
      message: {
        token: 'fFYDJSrCRBazTjE_spOHWS:APA91bHt99S-BsNfWNCNotmq6gkNKMQZz1CBT7k-gcxvH8i9Vgkxt4RdZrq0qEUtShnaYY156z2lK5N2z7ZO12ModBo9b_xqOQIEG31qzRQHLT6hUht8XCY6sllT-zClGdKfdgrAjivq',
        notification: {
          title: 'Your notification title',
          body: 'Your notification body',
        },
        data: {
          key1: 'value1',
          key2: 'value2',
        },
      },
    };
  
    // Set the request headers
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ya29.a0AfB_byCDLplnAqw2fMiCG1Rg86l54mP02oqfMoWeO6KFpFVD79scnyfdMsk_uTM-2ViqoxBY32PHOc3ZvC0_eLmUso9Nw4oH5DW8EBpJMtWTWyoqTBA2jCAJMidFgHD9lmiST53cLmZn7beT_b9OgoRl4QRyF15_sIi-DQaCgYKAT0SARASFQHGX2Mi1AMw6q5JoLd3PUeZ8JqqLA0173'
    };
  
    // Construct the API request URL
    const url = `https://fcm.googleapis.com/v1/projects/usapp-1d1ea/messages:send`;
  
    try {
      // Make the API request using fetch
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
      });
  
      const data = await response.json();
      console.log('Message sent successfully:', data);
    } catch (error) {
      console.log('Error sending message:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/backgroundImage.jpg')}
      resizeMode={'cover'}
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 30,
      }}>
      <Button onPress={getFCMAccessToken} title='asdasd'/>
  
    </ImageBackground>
  );
}
