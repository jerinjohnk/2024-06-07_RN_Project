/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlexShrinkBasisAndGrow() {
  return (
    <View style={{flex: 1, backgroundColor: 'cornflowerblue'}}>
      <View style={{flex: 0, backgroundColor: 'orange'}}>
        <Text>flex: 0 (17px)</Text>
      </View>
      <View
        style={{flex: 0, width: 700, height: 20, backgroundColor: 'yellow'}}>
        <Text>flex: 0, width: 700, height: 20 (20px)</Text>
      </View>

      <View
        style={{
          flex: 0,
          flexBasis: 10,
          width: 700,
          height: 20,
          backgroundColor: 'brown',
        }}>
        <Text>
          flex: 0, flexBasis: 10, width: 700, height: 20 (10px with 7px hidden
          below the next element)
        </Text>
      </View>
      <View
        style={{
          flex: 0,
          flexGrow: 1,
          width: 700,
          height: 20,
          backgroundColor: 'orange',
        }}>
        <Text>flex: 0, flexGrow: 1, width: 700, height: 20 (90px)</Text>
      </View>
      <View
        style={{
          flex: 0,
          flexShrink: 1,
          width: 700,
          height: 20,
          backgroundColor: 'tan',
        }}>
        <Text>flex: 0, flexShrink: 1, width: 700, height: 20 (20px)</Text>
      </View>
      <View
        style={{
          flex: 0,
          flexGrow: 1,
          flexBasis: 10,
          width: 700,
          height: 20,
          backgroundColor: 'purple',
        }}>
        <Text>
          flex: 0, flexGrow: 1, flexBasis: 10, width: 700, height: 20 (80px)
        </Text>
      </View>
      <View
        style={{
          flex: 0,
          flexShrink: 1,
          flexBasis: 10,
          width: 700,
          height: 20,
          backgroundColor: 'gray',
        }}>
        <Text>
          flex: 0, flexShrink: 1, flexBasis: 10, width: 700, height: 20 (10px
          with 7px hidden below the next element)
        </Text>
      </View>

      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <Text>flex: 1 (70px)</Text>
      </View>
      <View style={{flex: 1, width: 700, height: 20, backgroundColor: 'blue'}}>
        <Text>flex: 1, width: 700, height: 20 (70px)</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexBasis: 10,
          width: 700,
          height: 20,
          backgroundColor: 'cornsilk',
        }}>
        <Text>flex: 1, flexBasis: 10, width: 700, height: 20 (80px)</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          width: 700,
          height: 20,
          backgroundColor: 'red',
        }}>
        <Text>flex: 1, flexGrow: 1, width: 700, height: 20 (70px)</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexShrink: 1,
          width: 700,
          height: 20,
          backgroundColor: 'green',
        }}>
        <Text>flex: 1, flexShrink: 1, width: 700, height: 20 (70px)</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          flexBasis: 10,
          width: 700,
          height: 20,
          backgroundColor: 'aqua',
        }}>
        <Text>
          flex: 1, flexGrow: 1, flexBasis: 10, width: 700, height: 20 (80px)
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexShrink: 1,
          flexBasis: 10,
          width: 700,
          height: 20,
          backgroundColor: 'pink',
        }}>
        <Text>
          flex: 1, flexShrink: 1, flexBasis: 10, width: 700, height: 20 (80px)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
