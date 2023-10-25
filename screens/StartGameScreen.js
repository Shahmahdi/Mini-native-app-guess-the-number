import { View, TextInput, Button, StyleSheet } from 'react-native';

const StartGameScreen = () => {
  return (
    <View style={styles.sectionWrapper}>
      <TextInput
        style={styles.inputContainer}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Button title='Reset' color="#ff2222" />
        </View>
        <View style={styles.button}>
          <Button title='Confirm' color="#1ee196" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionWrapper: {
    margin: 10,
    padding: 20,
    backgroundColor: "#0e1318b3"
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
