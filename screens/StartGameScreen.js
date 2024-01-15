import { StyleSheet, TextInput, View, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react'
import PropTypes from 'prop-types';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler () {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //El alert tiene 3 partes, el primero es el titulo, el segundo el mensaje y el ultimo es un botón
            Alert.alert(
                'Número inválido', 
                'El número debe ser entre 1 y 99',
                [{text: 'Vale', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContianer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                //Esto es para que cuando se escribe con letras, no haga que automaticamente sea mayuscula la primera letra, no es necesario cuando se usa solamente números
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reiniciar</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirmar</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

StartGameScreen.propTypes = {
    onPickNumber: PropTypes.func, //Método del botón
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContianer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        //Sombras para android
        elevation: 8,
        //Sombras en iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
})