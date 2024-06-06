import React from 'react';
import {View, Text} from 'react-native';

const ViewDemo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
      }}>
      <View style={{backgroundColor: 'blue', flex: 0.3}} />
      <View style={{backgroundColor: 'red', flex: 0.5}} />
      <Text>Hello World!</Text>
    </View>
  );
};

export default ViewDemo;
