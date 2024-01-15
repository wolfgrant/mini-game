import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import Colors from '../../contants/colors';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

NumberContainer.propTypes = {
    children: PropTypes.number.isRequired, //Número elegido por el usuario
};

const styles= StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    },
})