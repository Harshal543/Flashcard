import React from 'react'
import { Platform } from 'react-native'
import glamorous from 'glamorous-native'

const CustomTextInput = glamorous.textInput({
  minWidth: 250,
  height: 50,
  borderRadius: Platform.OS === 'ios'
    ? 9
    : 2 ,
  borderWidth: Platform.OS === 'ios'
    ? 1
    : 0,
  paddingLeft: 10,
  paddingRight: 10,
  fontSize: 16,
  marginRight: 20,
  marginLeft: 20,
})

export default CustomTextInput