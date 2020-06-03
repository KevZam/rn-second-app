import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Input = props => {
  // this {...props} syntax spreads all the props you have and forwards them to the component. The style attribute 
  // will take precedence.
  return <TextInput {...props} style={{ ...styles.input, ...props.style }}></TextInput>
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
})

export default Input;