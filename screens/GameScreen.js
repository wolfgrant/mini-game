import { View, StyleSheet, Alert, Text, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useState, useEffect } from 'react'
import Title from '../components/ui/Title';
import PropTypes from 'prop-types';
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

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
        setGuessRounds(prevGuessRounds => [
            ...prevGuessRounds, newRndNumber
        ]);

    }

    return (
        <View style={styles.screen}>
            <Title>Suposición del oponenete</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Mayor o menor?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 'greater')}
                        >
                            <Ionicons name='md-add' size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 'lower')}
                        >
                            <Ionicons name='md-remove' size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                <FlatList data={guessRounds} renderItem={(itemData) => {
                    return (
                        <Text>{itemData.item}</Text>
                    )
                }} keyExtractor={(item) => item} />
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
            </View>
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
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
    },
    buttonContainer: {
        flex: 1,
    },
})