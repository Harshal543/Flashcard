import React, { Component } from 'react'
import { View, Text } from 'react-native'
import glamorous from 'glamorous-native'
import { connect } from 'react-redux'

const Card = glamorous.view({
  flex: 1,
  elevation: 3,
  alignSelf: 'stretch',
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 20,
})

class CardView extends Component {
  render(){
    return(
      <Card>
        <Text>Card View</Text>
      </Card>
    )
  }
}

function mapStateToProps (decks, { cardNo, deckId } ) {
  const { question, answer } = decks[deckId].questions[cardNo]

  return{
    question,
    answer,
  }
}

export default connect(mapStateToProps)(CardView)