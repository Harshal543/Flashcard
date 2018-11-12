import React, { Component } from 'react'
import glamorous from 'glamorous-native'
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import { gray, teal, white, accentRed } from '../utils/colors'
import Input from './CustomTextInput'
import CustomButton from './CustomButton'

const Form = glamorous.view({
  flex: 1,
  elevation: 3,
  alignSelf: 'stretch',
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 10,
  marginRight: 10,
})

const Title = glamorous.text({
  fontSize:25,
  marginBottom: 60,
})

const InteractContainer =  glamorous.view({
  flex: 7,
  justifyContent: 'center',
  alignItems: 'center',
})

const Action = glamorous.view({
  flex: 2,
  flexDirection: 'row',
  alignItems: 'center',
})

const Label = glamorous.text({
  fontSize: 16,
  color: teal,
  alignSelf: 'flex-start',
  marginLeft: 20,
})


class NewQuestion extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleQuestionInput = (ques) => {
  ques.trim() !== '' ?
    this.setState(() => ({
      question: ques,
    }))
  : this.setState(() => ({
      question: '',
    }))
  }

  handleAnswerInput = (ans) => {
    ans.trim() !== '' ?
      this.setState(() => ({
        answer: ans,
      }))
    : this.setState(() => ({
        answer: '',
      }))
  }

  render(){
    const { question, answer } = this.state
    return(
      <KeyboardAvoidingView behavior = 'padding' style = {{ flex:1 }} >
        <Form>
          <InteractContainer>
            <Title>Add New Question</Title>
            <Label>Question:</Label>
            <Input value = { question }
              placeholder = 'Question'
              style = {{ margin:10 }}
              multiline = { true }
              onChangeText = { (text) => this.handleQuestionInput(text) } />
            <Label>Answer:</Label>
            <Input value = { answer }
              placeholder = 'Answer...'
              style = {{ margin: 10, marginTop: 0, height: 80 }}
              multiline = { true }
              onChangeText = { (text) => this.handleAnswerInput(text) } />
          </InteractContainer>
          <Action>
            <CustomButton value = 'Add' />
          </Action>
        </Form>
      </KeyboardAvoidingView>
    )
  }
}

export default NewQuestion