import { View, Text, StyleSheet, Alert } from 'react-native'
import { useState, useEffect } from 'react'
import Title from '../components/ui/Title';
import PropTypes from 'prop-types';
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton';

//Se puede crear un componente funcional de dos maneras, 
//Forma 1
/* export default function GameScreen() {
  return (
    <View>
      <Text>GameScreen</Text>
    </View>
  )
} */

//Forma 2
/* function GameScreen() {
    return (
        <View>
            <Text>GameScreen</Text>
        </View>
    )
} 

export default GameScreen;*/

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction) { //direction => 'lower', 'greater'
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("No mientras!", "Tu sabes que lo que acabaste de oprimir es falso...",
                [
                    { text: 'Perdón!', style: 'cancel' }
                ])
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);

    }

    return (
        <View style={styles.screen}>
            <Title>Suposición del oponenete</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Mayor o menor?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
            <View>{/* Registro de rondas */}</View>
        </View>
    )
}

export default GameScreen;

GameScreen.propTypes = {
    userNumber: PropTypes.number, //Número elegido por el usuario
    onGameOver: PropTypes.func, //Número elegido por el usuario
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
})