import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = inputText => {
    // only allow number values  
    setEnteredValue(inputText.replace(/[^0-9]/g), '');
  }
  return (
    // allow us to touch outside the number pad to close the numpad
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>

      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input onChangeText={numberInputHandler} value={enteredValue} style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2} />
          <View style={styles.buttonContainer}>
            <Button title="Reset" onPress={() => { }} color={Colors.accent} />
            <Button title="Confirm" onPress={() => { }} color={Colors.primary} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback >

  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    // marginVertical replaces margin-bottom and margin-top
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  input: {
    width: 50,
    textAlign: 'center'
  }
})

export default StartGameScreen;