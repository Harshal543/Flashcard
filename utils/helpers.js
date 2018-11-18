import { AsyncStorage } from 'react-native'
import { formatData, DECK_STORAGE_KEY } from './_dummyData'

export function fetchData () {
  // AsyncStorage.removeItem(DECK_STORAGE_KEY)
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => {
      return formatData(decks)
    })
}

function formatDeck (deckTitle) {
  const deck_key =  deckTitle.replace(/\s/g,'_')
  return {
    [deck_key] : {
      title: deckTitle,
      questions: [],
    }
  }
}

export function addDeckData (deckTitle) {
  const deck = formatDeck(deckTitle)
  AsyncStorage.mergeItem(DECK_STORAGE_KEY,JSON.stringify(deck))

  return deck
}

export function deleteDeckData (id) {
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => {
      const deckList = JSON.parse(decks)
      deckList[id] = undefined
      delete deckList[id]
      AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(deckList))
    })
}

export function addQuestionData (id,ques,ans) {
  const arrToAdd = [{
    question: ques,
    answer: ans,
  }]
  AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then((decks) => {
    const deckData = JSON.parse(decks)
    deckData[id] = {
      ...deckData[id],
      questions: deckData[id].questions.concat(arrToAdd)
    }
    AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(deckData))
  })
}