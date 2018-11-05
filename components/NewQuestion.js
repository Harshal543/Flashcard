import React, { Component } from 'react'
import glamorous from 'glamorous-native'
import { View, Text, KeyboardAvoidingView } from 'react-native'
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
  flex: 4,
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
    questionInputHeight: 0,
    answer: '',
    answerInputHeight: 0,
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

handleQuestionSizeChange = (event) => {
  this.setState({
    questionInputHeight: event.nativeEvent.contentSize.height,
  })
}

handleAnswerSizeChange = (event) => {
  this.setState({
    answerInputHeight: event.nativeEvent.contentSize.height,
  })
}

  render(){
    return(
      <KeyboardAvoidingView behavior = 'padding' style = {{ flex:1 }} >
        <Form>
          <InteractContainer>
            <Title>Add New Question</Title>
            <Label>Question</Label>
            <Input value = { this.state.question }
              placeholder = 'Question'
              style={{ margin:10 }}
              multiline = { true }
              onContentSizeChange = { (event) => this.handleQuestionSizeChange(event) }
              onChangeText = { (text) => this.handleQuestionInput(text) } />
            <Label>Answer</Label>
            <Input value = { this.state.answer }
              placeholder = 'Answer'
              style={{ margin:10 }}
              multiline = { true }
              onContentSizeChange = { (event) => this.handleAnswerSizeChange(event) }
              onChangeText = { (text) => this.handleAnswerInput(text) } />
          </InteractContainer>
          <Action>
            <CustomButton>Add</CustomButton>
          </Action>
        </Form>
      </KeyboardAvoidingView>
    )
  }
}

export default NewQuestion