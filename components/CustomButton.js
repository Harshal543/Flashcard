import React from 'react'
import glamorous from 'glamorous-native'
import { teal, white } from '../utils/colors'
import { Platform, Text, StyleSheet } from 'react-native'

const Btn = glamorous.touchableOpacity({
  margin: 2,
  padding: 10,
  paddingLeft: 30,
  paddingRight: 30,
  height: 45,
  borderRadius: Platform.OS === 'ios' ? 7 : 2,
  shadowRadius: 3,
  shadowOpacity: 1,
  shadowColor: 'rgba(0, 0, 0, 0.24)',
  shadowOffset: {
    width: 0,
    height: 3
  },
  justifyContent: 'center',
},
  (props) => ({
    backgroundColor: props.fill && props.color,
    borderColor: props.color ? props.color : teal,
    borderWidth: props.noborder ? 0 : 1,
  })
)

const ButtonLabel = glamorous.text({
  color: teal,
  textAlign: 'center',
  fontWeight: 'bold',
},
  (props) => ({
    color: props.color ?
    (props.fill ? white : props.color)
    : teal,
  })
)

function CustomButton({ children, onPress, style={}, ...rest }) {
  return(
    <Btn style = { style } onPress = { onPress } { ...rest } >
      <ButtonLabel { ...rest } >{ children }</ButtonLabel>
    </Btn>
  )
}

export default CustomButton