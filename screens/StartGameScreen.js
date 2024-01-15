import { StyleSheet, TextInput, View, Alert, Text } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react'
import PropTypes from 'prop-types';
import Colors from '../contants/colors';
import Title from '../components/ui/Title';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //El alert tiene 3 partes, el primero es el titulo, el segundo el mensaje y el ultimo es un botón
            Alert.alert(
                'Número inválido',
                'El número debe ser entre 1 y 99',
                [{ text: 'Vale', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Adivina mi número</Title>
            <View style={styles.inputContianer}>
                <Text style={styles.instructionText}>ingresa un número</Text>
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
        </View>
    )
}

StartGameScreen.propTypes = {
    onPickNumber: PropTypes.func, //Método del botón
};

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    inputContianer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        //Sombras para android
        elevation: 8,
        //Sombras en iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
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