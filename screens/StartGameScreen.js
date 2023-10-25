import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Colors } from '../constant/Colors';

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const onChange = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetNumber = () => {
    setEnteredNumber("");
  }

  const confirmButtonPressed = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Number has to be a number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetNumber }
      ])
    }
    props.pickNumber(chosenNumber);
  }

  return (
    <View style={styles.sectionWrapper}>
      <TextInput
        style={styles.inputContainer}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={onChange}
      />
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Button title='Reset' color={Colors.danger} onPress={resetNumber} />
        </View>
        <View style={styles.button}>
          <Button title='Confirm' color={Colors.success} onPress={confirmButtonPressed} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionWrapper: {
    margin: 10,
    padding: 20,
    backgroundColor: Colors.subSectionBg
  },
  inputContainer: {
    borderColor: 'white',
    borderWidth: 1,
    color: "white",
    padding: 8,
    textAlign: "center"
  },
  buttonWrapper: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: "center"
  },
  button: {
    width: 100,
    marginRight: 12
  }
});

export default StartGameScreen;
