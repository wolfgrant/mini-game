import { StyleSheet, TextInput, View, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react'
import PropTypes from 'prop-types';
import Colors from '../contants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText';

//Solo como aprendizaje, esto es un customHook
//Se coge una función y se encapsula, para que pueda ser usada en otro lado
/* function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return {
        count,
        increment,
        decrement
    };
} */
function StartGameScreen({ onPickNumber }) {

    //Y se llama el custom hook de esta forma
    //Teniendo en cuenta que el 0 en userCounter es el parametro que recibe la función y lo demás es lo que se retorna
    /* const { count, increment, decrement } = useCounter(0); */

    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

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
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
            </KeyboardAvoidingView>
        </ScrollView>

    )
}

StartGameScreen.propTypes = {
    onPickNumber: PropTypes.func, //Método del botón
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
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