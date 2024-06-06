/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PreviewLayout from './PreviewLayout';

const AlignItems = () => {
  const [alignItems, setAlignItems] = useState('stretch');

  return (
    <PreviewLayout
      label="alignItems"
      selectedValue={alignItems}
      values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
      // showFlexDirection
      setSelectedValue={setAlignItems}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View
        style={[
          styles.box,
          {
            backgroundColor: 'steelblue',
            width: 'auto',
            minWidth: 50,
          },
        ]}
      />
    </PreviewLayout>
  );
};

export default AlignItems;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});
