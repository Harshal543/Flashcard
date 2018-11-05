import React, { Component } from 'react'
import glamorous  from 'glamorous-native'
import { Text, View } from 'react-native'
import { teal, gray, accentRed } from '../utils/colors'
import CustomButton from './CustomButton'
import { Entypo } from '@expo/vector-icons'

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

function DeckView (props){
  return(
    <Container>
      <ContentContainer>
        <Title>Deck Title</Title>
        <CardCount># cards</CardCount>
      </ContentContainer>
      <Action>
        <CustomButton style = {{ margin: 10 }} color = { accentRed } fill >Start Quiz</CustomButton>
        <CustomButton onPress={() => props.navigation.navigate('NewQuestion')}
          style={{ margin: 10 }} >
            <Entypo name = 'plus' size = { 18 } /> Question
          </CustomButton>
        <CustomButton style={{ margin: 20 }} noborder color = { gray } >Delete Deck</CustomButton>
      </Action>
    </Container>
  )
}

export default DeckView