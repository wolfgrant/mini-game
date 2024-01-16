import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import PropTypes from 'prop-types';
import Colors from '../../contants/colors';

function NumberContainer({children}) {

  const {width, height} = useWindowDimensions();

  let container = {
    padding: 24,
    margin: 24,
  }

  let numberTextFontSize = 36

  if( width > 500){ 
    container = {
      padding: 20,
      margin: 20,
    }
    numberTextFontSize = 28;
    
  }

  const containerStyle = container
  const numberTextStyle = {
    fontSize: numberTextFontSize,
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.numberText, numberTextStyle]}>{children}</Text>
    </View>
  )
}

export default NumberContainer

NumberContainer.propTypes = {
    children: PropTypes.number.isRequired, //Número elegido por el usuario
};


const deviceWidth = Dimensions.get('window').width;

const styles= StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontFamily: 'open-sans-bold',
        /* fontWeight: 'bold' */
    },
})