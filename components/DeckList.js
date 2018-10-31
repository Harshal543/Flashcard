import React from 'react'
import { Text, View, ScrollView, Platform } from 'react-native'
import { gray, teal, white } from '../utils/colors'
import glamorous from 'glamorous-native'

const Deck = glamorous.touchableOpacity({
  flex: 1,
  height: 150,
  elevation: 2,
  borderRadius: Platform.OS === 'ios' ? 16 : 7,
  shadowRadius: 3,
  shadowOpacity: 1,
  shadowColor: 'rgba(0, 0, 0, 0.24)',
  shadowOffset: {
    width: 0,
    height: 3
  },
  backgroundColor: white,
  marginTop: 2,
  marginBottom: 2,
  marginLeft: 10,
  marginRight: 10,
  alignItems: 'center',
  justifyContent: 'center',
})

const Title = glamorous.text({
  fontSize: 28,
  color: teal,
})

const Content = glamorous.text({
  fontSize: 16,
})

const Hint = glamorous.text({
  fontSize:10,
  color: gray,
  marginTop: 15,
})

class DeckList extends React.Component {
  render() {
    return ( // Try different View options FlatView or ListView
      <ScrollView contentContainerStyle={{ justifyContent: 'space-between' }} >
        <Deck
          onPress={() => this.props.navigation.navigate('DeckView')}>
          <Title>Deck title</Title>
          <Content>3 cards</Content>
          <Hint>Tap to open</Hint>
        </Deck>
        <Deck>
          <Title>Deck title</Title>
          <Content>3 cards</Content>
          <Hint>Tap to open</Hint>
        </Deck>
        <Deck>
          <Title>Deck title</Title>
          <Content>3 cards</Content>
          <Hint>Tap to open</Hint>
        </Deck>
        <Deck>
          <Title>Deck title</Title>
          <Content>3 cards</Content>
          <Hint>Tap to open</Hint>
        </Deck>
        <Deck>
          <Title>Deck title</Title>
          <Content>3 cards</Content>
          <Hint>Tap to open</Hint>
        </Deck>
        <Deck>
          <Title>Deck title</Title>
          <Content>3 cards</Content>
          <Hint>Tap to open</Hint>
        </Deck>
      </ScrollView>
    )
  }
}

export default DeckList