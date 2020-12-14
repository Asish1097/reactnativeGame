import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function GameOver(props) {
        return (
            <View style={styles.screen}>
                <Text>The Game is over!</Text>
                <Text>number of rounds:{props.roundsNumber}</Text>
                <Text>number was:{props.userNumber}</Text>
                <Button title="NEW GAME" onPress={ props.onRestart}/>
            </View>
        );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
   }
});

export default GameOver;
