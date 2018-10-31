import React from 'react'
import glamorous from 'glamorous-native'
import { teal } from '../utils/colors'
import { Platform, Text, StyleSheet } from 'react-native'

const Btn = glamorous.touchableOpacity({
  margin: 2,
  padding: 10,
  paddingLeft: 30,
  paddingRight: 30,
  height: 45,
  borderWidth: 1,
  borderColor: teal,
  borderRadius: Platform.OS === 'ios' ? 7 : 2,
  shadowRadius: 3,
  shadowOpacity: 1,
  shadowColor: 'rgba(0, 0, 0, 0.24)',
  shadowOffset: {
    width: 0,
    height: 3
  },
  justifyContent: 'center',
})

const styles = StyleSheet.create({
  btnText: {
    color: teal,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

function CustomButton({ children, onPress, style={}, textStyle={} }) {
  return(
    <Btn style = { style } onPress = { onPress } >
      <Text style = {[styles.btnText,textStyle]} >{ children }</Text>
    </Btn>
  )
}

export default CustomButton