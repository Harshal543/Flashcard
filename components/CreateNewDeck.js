import React, { Component } from 'react'
import {
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
  elevation: 3,
  alignSelf: 'stretch',
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 10,
  marginRight: 10,
})

const InteractContainer =  glamorous.view({
  flex: 7,
  justifyContent: 'center',
  alignItems: 'center'
})

const Action = glamorous.view({
  flex: 3,
  flexDirection: 'row',
  alignItems: 'flex-end',
  padding: 5,
})

const Title = glamorous.text({
  fontSize:28,
  marginBottom: 30,
})


class CreateNewDeck extends Component {
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
          <InteractContainer>
            <Title>Enter Title of Deck</Title>
            <Input value = { this.state.title }
              placeholder = 'Title'
              onChangeText = {(text) => this.handleChange(text)} />
          </InteractContainer>
          <Action>
            <CustomButton
              style = {{ flex: 1 }}
              color = { red }
              onPress = { () => this.clearInput() } >Clear</CustomButton>
            <CustomButton style={{ flex: 2 }} >Submit</CustomButton>
          </Action>
        </Form>
      </KeyboardAvoidingView>
    )
  }
}


export default CreateNewDeck