import { View, Text, Pressable } from 'react-native'
import PropTypes from 'prop-types';

function PrimaryButton({ children }) {
    function pressHandler() {
        console.log('Pressed!')
    }
    return (
        //Cuando queramos que un metodo se ejecute al renderizarse por primera vez, se debe usar () despues del nombre del método, Ej: pressHandler()
        <Pressable onPress={pressHandler}>
            <View>
                <Text>{children}</Text>
            </View>
        </Pressable>
    )
}

PrimaryButton.propTypes = {
    children: PropTypes.string.isRequired,
};

export default PrimaryButton; 