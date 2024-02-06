import React from 'react';
import {ImageBackground, Button} from 'react-native';

export default function HomeScreen() {

  
  const sendMessageToDevice = async () => {
    // Construct the request body
    const requestBody = {
      message: {
        token: 'dKtj2AXzQkeDHsxHi3jtZF:APA91bGdSInb2chtr6dc92uHStRV83dpCLGq6UrefbIZSgtW8cxwvjuBGZ5GGLdFy-T9kBKXYAa3vumBWffV3_QutPy6C7Ir-NhL-A2E7XHYnwWDVUDjFU9FzadsFUD66DEpk16ASC15',
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
      Authorization:  "Bearer ya29.a0AfB_byCxCmBwbGnhykPlk11RIM9EeUUVBz2u-sw9CMjLBeLW4m6AxIg2px6XGSKCSC3HUMf4CN3YvbSxtfeDpUoto-K9bf0RQ180nRimfQI_Bmtk2AFYV2x91XLRxt87Bvj1PNpRWhc2jW3IojRfiXkmsrtHHhss0Rf2aCgYKAVASARASFQHGX2MikDTba4jrLrR6Ki_gkC0cGQ0171"
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
      <Button onPress={sendMessageToDevice} title='asdasd'/>

    </ImageBackground>
  );
}
