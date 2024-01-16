import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import Colors from '../../contants/colors';

function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Suposición del oponente: {guess}</Text>
    </View>
  )
}

GuessLogItem.propTypes = {
    roundNumber: PropTypes.number.isRequired, //Número elegido por el usuario
    guess: PropTypes.number.isRequired, //Número elegido por el usuario
};

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans'
    }
});