/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Pay = () => {
  return (
    <View style={styles.container}>
      <Text>Pay!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Pay;
