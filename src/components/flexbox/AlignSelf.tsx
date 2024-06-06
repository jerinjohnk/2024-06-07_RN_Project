import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import type {FlexAlignType} from 'react-native';
import PreviewLayout from './PreviewLayout';

const AlignSelf = () => {
  const [alignSelf, setAlignSelf] = useState<FlexAlignType>('stretch');

  return (
    <PreviewLayout
      label="alignSelf"
      selectedValue={alignSelf}
      values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
      // @ts-ignore
      setSelectedValue={setAlignSelf}>
      <View
        style={[
          styles.box,
          {
            alignSelf,
            width: 'auto',
            minWidth: 50,
            backgroundColor: 'powderblue',
          },
        ]}
      />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

export default AlignSelf;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});
