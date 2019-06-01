import React, {Component} from 'react';
import { StyleSheet, Text } from 'react-native';

export default class NameText extends Component {
  render() {
    return <Text style={styles.textStyle}> 
    {this.props.string}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    color: '#FFFFFF',
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5
  }
});
