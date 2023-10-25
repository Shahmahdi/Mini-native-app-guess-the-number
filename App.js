import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from "expo-linear-gradient";
import DiceImage from "./assets/dice-image.jpeg";
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import { Colors } from './constant/Colors';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const pickNumber = (value) => {
    setUserNumber(value);
  }

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.primary2]}
      style={styles.mainWrapper}
    >
      <ImageBackground
        source={DiceImage}
        resizeMode='cover'
        style={styles.mainWrapper}
        imageStyle={styles.backgroundImageStyle}
      >
        <SafeAreaView>
          {!userNumber ? (
            <StartGameScreen pickNumber={pickNumber} /> 
          ) : (
            <GameScreen />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center"
  },
  backgroundImageStyle: {
    opacity: 0.3
  }
});
