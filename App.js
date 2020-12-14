import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

import Header from "./components/Header";
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';
import GameOver from './screens/GameOverScreen';


// const fetchFont = () => {
//   return Font.loadAsync({
//     'NatoSans-Bold': require('./assets/fonts/NotoSans-Bold.ttf'),
//     'NatoSans-BoldItalic': require('./assets/fonts/NotoSans-BoldItalic.ttf'),
//     'NatoSans-Italic': require('./assets/fonts/NotoSans-Italic.ttf'),
//     'NatoSans-Regular': require('./assets/fonts/NotoSans-Regular.ttf'),
//   });
// };

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  // const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       loadAsync={fetchFont}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }

  

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      {content }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
