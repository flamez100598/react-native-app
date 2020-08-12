import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CatagoryList from './components/CatagoryList';
export default class App extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <CatagoryList title="soccer aaaa"/>
      <CatagoryList title="volleyball" />
      <CatagoryList title="tennis" />
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight:16
  },
});
