import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NameText from './src/components/NameText';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NameText string= 'Ramaun' />   
        <NameText string= 'Alpha' />   
        <NameText string= 'Bowie' />   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
