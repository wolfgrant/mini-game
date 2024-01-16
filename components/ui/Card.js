import { View, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types';
import Colors from '../../contants/colors';

function Card({children}) {
  return <View style={styles.card}>{children}</View>
}

export default Card;

Card.propTypes = {
    children: PropTypes.any,
};

const deviceWidth = Dimensions.get('window').width

const styles= StyleSheet.create ({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        //Sombras para android
        elevation: 8,
        //Sombras en iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
})