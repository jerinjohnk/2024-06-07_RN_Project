import React from 'react';
import {Text, Image, View, SafeAreaView, StyleSheet} from 'react-native';

function Demo1() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Demo1</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF0',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Demo1;
