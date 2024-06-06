import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PreviewLayout from './PreviewLayout';

const JustifyContentBasics = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');

  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ]}
      //   showFlexDirection={true} // uncomment this to check how it works with flexDirection
      setSelectedValue={setJustifyContent}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

export default JustifyContentBasics;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});
