import { View, Text, Pressable, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import Colors from '../../contants/colors'

function PrimaryButton({ children, onPress }) {

    //se puede colocar el onpress acá en el metodo o simplemente llamarlo directamente en el pressable
    /* function pressHandler() {
        onPress();
    } */
    return (
        //Cuando queramos que un metodo se ejecute al renderizarse por primera vez, se debe usar () despues del nombre del método, Ej: pressHandler()
        <View style={styles.buttonOuterContainer}>
            {/* El style del pressed es para que cuando sea presionado, lo coja el iOS los estilos */}
            <Pressable style={({ pressed }) =>
                pressed
                    ? [styles.container, styles.pressed]
                    : styles.container
            }
                onPress={onPress} 
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

PrimaryButton.propTypes = {
    children: PropTypes.string.isRequired, //Text del botón
    onPress: PropTypes.func, //Método del botón
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    container: {
        backgroundColor: Colors.primary500,
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