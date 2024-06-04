import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export const TextInputDemo = () => {
  const [text, onChangeText] = React.useState('Placeholder Text');

  return (
    <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
