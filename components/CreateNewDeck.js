import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import glamorous from 'glamorous-native'
import { white, teal, red } from '../utils/colors'
import Input from './CustomTextInput'
import CustomButton from './CustomButton'

const Form = glamorous.view({
  flex: 1,
  paddingTop: 80,
  paddingBottom: 80,
  elevation: 3,
  alignSelf: 'stretch',
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 10,
  marginRight: 10,
})

const Action = glamorous.view({
  flexDirection: Platform.OS === 'ios'
    ? 'row-reverse'
    : 'row',
  marginTop: 70,
  paddingLeft: 5,
  paddingRight: 5,
})

const Title = glamorous.text({
  fontSize:28,
  marginBottom: 30,
})

const styles = StyleSheet.create({
  clrBtn: {
    flex: 1,
    borderColor: red,
  },
  submitBtn: {
    flex: 2,
  }
})


class CreateNewDeck extends React.Component {
  state={
    title: '',
  }

  handleChange = (value) => {
    value.trim() !== '' ?
      this.setState(() => ({
        title: value,
      }))
    : this.clearInput()
  }

  clearInput = () => {
    this.setState(() => ({
      title: '',
    }))
  }

  render() {
    return (
      <KeyboardAvoidingView behavior = 'padding' style = {{flex:1}} >
        <Form>
          <Title>Enter Title of Deck</Title>
          <Input value = { this.state.title }
            onChangeText = {(text) => this.handleChange(text)} />
          <Action>
            <CustomButton
              style = { styles.clrBtn }
              textStyle = {{ color: red }}
              onPress = { () => this.clearInput() } >Clear</CustomButton>
            <CustomButton style={ styles.submitBtn } >Submit</CustomButton>
          </Action>
        </Form>
      </KeyboardAvoidingView>
    )
  }
}


export default CreateNewDeck