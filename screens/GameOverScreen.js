import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title';
import Colors from '../contants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import PropTypes from 'prop-types';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Terminó el juego!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Tu teléfono necesitó <Text style={styles.highlight}>{roundsNumber}</Text> intentos para adivinar el número <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Iniciar nuevo juego</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

GameOverScreen.propTypes = {
    userNumber: PropTypes.number.isRequired,
    roundsNumber: PropTypes.number,
    onStartNewGame: PropTypes.func,
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
}); 