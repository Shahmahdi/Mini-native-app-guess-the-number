import { ImageBackground, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from "expo-linear-gradient";
import DiceImage from "./assets/dice-image.jpeg";

export default function App() {
  return (
    <LinearGradient
      colors={['#1ECBE1', '#BDF2F9']}
      style={styles.mainWrapper}
    >
      <ImageBackground
        source={DiceImage}
        resizeMode='cover'
        style={styles.mainWrapper}
        imageStyle={styles.backgroundImageStyle}
      >
        <StartGameScreen />
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
