import { Text, StyleSheet, Platform } from 'react-native'
import PropTypes from 'prop-types';

//Nota, sio se quiere hacer un componente para Android o para iOS Se puede crear por ejemplo: Title.android.js y Title.ios.js, 
//cuando se importan, solo se coloca import Title from '../components/ui/Title, no es necesario poner .ios o .android por que esa es solo la extensión, 
//entonces React Native va a coger el necesario dependiendo de la plataforma en la que se ejecute el aplicativo
function Title({ children }) {
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
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    //Esta es una forma
    /* borderWidth: Platform.OS === 'android' ? 2 : 0, */
    //Esta es otra
    /* borderWidth: Platform.select({ios: 0, android: 2}), */
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
})