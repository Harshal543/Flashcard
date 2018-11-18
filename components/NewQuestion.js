import React, { Component } from 'react'
import glamorous from 'glamorous-native'
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import { gray, teal, white, accentRed } from '../utils/colors'
import Input from './CustomTextInput'
import CustomButton from './CustomButton'
import { connect } from 'react-redux'
import { addQuestionData } from '../utils/helpers'
import { addQuestion } from '../actions'

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
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params
    return {
      title: deckTitle,
    }
  }

  state = {
    question: '',
    answer: '',
    error: false,
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

  handleAddQuestion = () => {
    let { question, answer } = this.state
    const { deckId } = this.props.navigation.state.params
    const { addNewQuestion } = this.props

    question = question.trim()
    answer = answer.trim()

    if (question === '' || answer === ''){
      this.setState(() => ({
        error: true,
      }))
      return 1
    }

    const formattedQuestion = {
      question: question,
      answer: answer,
    }

    addQuestionData(deckId,question,answer)

    this.props.navigation.navigate('DeckView')

    addNewQuestion(deckId,formattedQuestion)
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
            <CustomButton value = 'Add'
              onPress = { () => this.handleAddQuestion() } />
          </Action>
        </Form>
      </KeyboardAvoidingView>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addNewQuestion: (id,ques) => {
      dispatch(addQuestion(id,ques))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewQuestion)