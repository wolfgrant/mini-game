import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title';
import Colors from '../contants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import PropTypes from 'prop-types';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }
    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>Terminó el juego!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image} source={require('../assets/images/success.png')} />
                </View>
                <Text style={styles.summaryText}>
                    Tu teléfono necesitó <Text style={styles.highlight}>{roundsNumber}</Text> intentos para adivinar el número <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Iniciar nuevo juego</PrimaryButton>
            </View>
        </ScrollView>
    )
}

export default GameOverScreen;

GameOverScreen.propTypes = {
    userNumber: PropTypes.number.isRequired,
    roundsNumber: PropTypes.number,
    onStartNewGame: PropTypes.func,
};

/* const deviceWidth = Dimensions.get('window').width; */

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        /* width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150, */
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