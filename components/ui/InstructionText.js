import { Text, StyleSheet } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import Colors from '../../contants/colors';

function InstructionText({children, style}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

InstructionText.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});