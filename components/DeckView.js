import React, { Component } from 'react'
import glamorous  from 'glamorous-native'
import { Text, View } from 'react-native'
import { teal, gray, accentRed } from '../utils/colors'
import CustomButton from './CustomButton'
import { Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { deleteDeck } from '../actions'
import { deleteDeckData } from '../utils/helpers'
import { red } from '../utils/colors'

const Container = glamorous.view({
  flex: 1,
  alignSelf: 'stretch',
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 10,
  marginRight: 10,
})

const Action = glamorous.view({
  flex: 4,
  justifyContent: 'flex-end',
  paddingLeft: 5,
  paddingRight: 5,
})

const ContentContainer =  glamorous.view({
  flex: 6,
  justifyContent: 'center',
  alignItems: 'center'
})


const Title = glamorous.text({
  fontSize: 28,
})

const CardCount = glamorous.text({
  fontSize: 16,
  color: teal,
})

const CenterView = glamorous.view({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})

const handleDeleteDeck = (id, deleteStoredDeck, navigation) => {
  // delete from aysnc storage
  deleteDeckData(id)

  //back to list
  navigation.navigate('DeckList')

  //delete from redux
  deleteStoredDeck(id)
}

function DeckView (props){

  if(props.deck === undefined){
    //just for precaution
    return (
      <CenterView>
        <Text style = {{color: red}} >Deleted Deck</Text>
      </CenterView>
    )
  }


  const { title, questions } = props.deck
  const { deleteStoredDeck, deckId, navigation } = props

  return(
    <Container>
      <ContentContainer>
        <Title>{title}</Title>
        <CardCount>{questions.length} cards</CardCount>
      </ContentContainer>
      <Action>
        <CustomButton style = {{ margin: 10 }}
          color = { accentRed }
          value = 'Start Quiz'
          onPress = { () => props.navigation.navigate(
              'QuizView',
              {
                deckId: deckId,
              }

            )}
          fill />
        <CustomButton
          onPress= { () => props.navigation.navigate(
              'AddCard',
              {
                deckId: deckId,
                deckTitle: title,
              }
            )}
          style={{ margin: 10 }} value = 'Add Card' >
            <Entypo name = 'plus' size = { 18 } />
        </CustomButton>
        <CustomButton style={{ margin: 20 }}
          value = 'Delete Deck'
          onPress = { () => handleDeleteDeck(
            deckId,
            deleteStoredDeck,
            navigation,
            )}
          noborder color = { gray } />
      </Action>
    </Container>
  )
}

DeckView.navigationOptions = ({ navigation }) => {
  //setting title
  const { deckTitle } = navigation.state.params

  return {
    title: deckTitle,
  }
}


function mapStateToProps (decks,{ navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId,
    deck: decks[deckId],
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteStoredDeck: (id) => {
      dispatch(deleteDeck(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckView)