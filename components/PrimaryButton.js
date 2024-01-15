import { View, Text, Pressable, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

function PrimaryButton({ children }) {
    function pressHandler() {
        console.log('Pressed!')
    }
    return (
        //Cuando queramos que un metodo se ejecute al renderizarse por primera vez, se debe usar () despues del nombre del método, Ej: pressHandler()
        <View style={styles.buttonOuterContainer}>
            {/* El style del pressed es para que cuando sea presionado, lo coja el iOS los estilos */}
            <Pressable style={({ pressed }) =>
                pressed
                    ? [styles.container, styles.pressed]
                    : styles.container
            } onPress={pressHandler} android_ripple={{ color: '#640233' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

PrimaryButton.propTypes = {
    children: PropTypes.string.isRequired,
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    container: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,

    }
});