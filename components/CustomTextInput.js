import React from 'react'
import { Platform } from 'react-native'
import { lightGray } from '../utils/colors'
import glamorous from 'glamorous-native'

const CustomTextInput = glamorous.textInput({
  minWidth: 250,
  height: 50,
  borderRadius: Platform.OS === 'ios'
    ? 9
    : 2,
  borderWidth: Platform.OS === 'ios'
    ? 1
    : 0,
  borderColor: lightGray,
  paddingLeft: 10,
  paddingRight: 10,
  fontSize: 16,
  marginRight: 10,
  marginLeft: 10,
  paddingBottom: Platform.OS === 'ios'
    ? 3
    : 8,
})

export default CustomTextInput