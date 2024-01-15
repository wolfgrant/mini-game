import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import Colors from '../../contants/colors';

function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title;

Title.propTypes = {
    children: PropTypes.string.isRequired, //Text del titulo
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    }
})