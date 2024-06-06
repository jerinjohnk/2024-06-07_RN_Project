import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import PreviewLayout from './PreviewLayout';

const PositionLayout = () => {
  const [position, setPosition] = useState<'relative' | 'absolute'>('relative');

  return (
    <PreviewLayout
      label="position"
      selectedValue={position}
      values={['relative', 'absolute']}
      setSelectedValue={setPosition}>
      <View
        style={[
          styles.box,
          {
            top: 25,
            left: 25,
            position,
            backgroundColor: 'powderblue',
          },
        ]}
      />
      <View
        style={[
          styles.box,
          {
            top: 50,
            left: 50,
            position,
            backgroundColor: 'skyblue',
          },
        ]}
      />
      <View
        style={[
          styles.box,
          {
            top: 75,
            left: 75,
            position,
            backgroundColor: 'steelblue',
          },
        ]}
      />
    </PreviewLayout>
  );
};

export default PositionLayout;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});
