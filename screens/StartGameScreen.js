import { StyleSheet, TextInput, View, Alert, useWindowDimensions } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react'
import PropTypes from 'prop-types';
import Colors from '../contants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions();

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

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title>Adivina mi número</Title>
            <Card>
                <InstructionText>Ingresa un número</InstructionText>
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
            </Card>
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
        alignItems: 'center'
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