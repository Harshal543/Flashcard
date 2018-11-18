import React, { Component } from 'react'
import { View, Text } from 'react-native'
import glamorous from 'glamorous-native'
import CardView from './CardView'
import { connect } from 'react-redux'

const CenterView = glamorous.view({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})

class QuizView extends Component {

  state = {
    correct: 0,
    currentCard: 0,
  }

  nextCard = () => {
    this.setState((prevState) => ({
      currentCard: prevState.currentCard + 1,
    }))
  }

  incrCorrectCount = () => {
    this.setState((prevState) => ({
      correct: prevState.correct + 1,
    }))
  }

  render(){
    const { currentCard, correct } = this.state
    const { totalCards, deckId } = this.props

    if (currentCard < totalCards) {
      return(
        <View style = {{flex:1}} >
          <CardView
            cardNo = { currentCard }
            deckId = { deckId }
            nextCard = { this.nextCard }
            incrCorrectCount = { this.incrCorrectCount }
          />
        </View>
      )
    }

    if(currentCard === totalCards) {
      return(
        <Text>Correct: { correct }</Text>
      )
    }

    return(
      //just for kicks
      <CenterView>
        <Text>Oops!, Something went wrong. Try restart Quiz</Text>
      </CenterView>
    )

  }
}

function mapStateToProps (decks,{ navigation }) {
  const { deckId } = navigation.state.params
  const totalCards = decks[deckId].questions.length

  return {
    deckId,
    totalCards,
  }
}

export default connect(mapStateToProps)(QuizView)