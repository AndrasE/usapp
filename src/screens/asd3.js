import React, { useState } from 'react';
import {View, Text} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Asd3Screen() {
  [state, setState] = useState()

  const options = [
    {label: '01:00', value: '1'},
    {label: '01:30', value: '1.5'},
    {label: '02:00', value: '2'},
  ];

  console.log(state);

  return (
    <View
      style={{
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SwitchSelector
        initial={0}
        onPress={value => this.setState({gender: value})}
        textColor="#7a44cf"
        selectedColor="#7a44cf"
        buttonColor="#7a44cf"
        borderColor="#7a44cf"
        hasPadding
        options={[
          {label: 'light', value: 'f'}, //images.feminino = require('./path_to/assets/img/feminino.png')
          {label: 'default', value: 'f'}, //images.feminino = require('./path_to/assets/img/feminino.png')
          {label: 'dark', value: 'm'}, //images.masculino = require('./path_to/assets/img/masculino.png')
        ]}
      />
    </View>
  );
}
