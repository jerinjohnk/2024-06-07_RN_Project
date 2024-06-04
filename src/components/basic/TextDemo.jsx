import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TextDemo = () => {
  const titleText = 'Hello World';
  return <Text style={styles.titleText}>{titleText}</Text>;
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextDemo;
