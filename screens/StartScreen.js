import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Color from '../constants/Color';

function StartScreen(props) {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g,'' ))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 to 99',
            [{text:'okay',style:'destructive',onPress: resetInputHandler}]);
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.confirmedNUmber}>
                <Text>You selected</Text>
                <View style={styles.selectedOutput}>
                    <Text style={styles.selectedNumber}>{selectedNumber}</Text>
                </View>
                <Button title="START GAME" onPress={ ()=>props.onStartGame(selectedNumber)}/>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={ styles.header}>
                <Text style={styles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <TextInput style={styles.input} blurOnSubmit
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Reset' onPress={resetInputHandler} color={Color.accent}/>
                        </View>
                        <View style={styles.button}>
                            <Button title='Confirm' onPress={confirmInputHandler} color={Color.primary}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
        );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        padding: 10,
        alignItems:"center"
    },
    title: {
        fontSize: 18,
        marginVertical: 10,
        // fontFamily:'NatoSans-Bold'
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
        width:50,
    },
    buttonContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal:15
    },
    button: {
        width:100
    },
    confirmedNUmber: {
        width:'40%',
        marginTop: 20,
        alignItems:"center"
    },
    selectedOutput: {
        borderWidth: 2,
        borderColor: Color.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: "center",
        alignItems:"center"
    },
    selectedNumber: {
        color: Color.accent,
        fontSize:22,
    }
});

export default StartScreen;
